"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NODE_COUNT = 60;
const CONNECT_DIST = 150;
const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;
const MOUSE_DIST = 120;
const MOUSE_DIST_SQ = MOUSE_DIST * MOUSE_DIST;
const MOUSE_PULL = 0.8;
const BASE_SPEED = 0.3;
const LINE_R = 124;
const LINE_G = 58;
const LINE_B = 237;

export default function NeuralBackground({ subtle = false }: { subtle?: boolean }) {
  const nodeColor = subtle ? "rgba(124,58,237,0.35)" : "rgba(124,58,237,0.4)";
  const lineMaxAlpha = subtle ? 0.07 : 0.08;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };
    let animId = 0;

    const syncSize = () => {
      const prev = { w: canvas.width, h: canvas.height };
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      return prev;
    };

    const spawnNodes = () =>
      Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * BASE_SPEED * 2,
        vy: (Math.random() - 0.5) * BASE_SPEED * 2,
      }));

    syncSize();
    if (canvas.width === 0 || canvas.height === 0) return;
    nodes = spawnNodes();

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      for (const node of nodes) {
        if (!prefersReduced) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dSq = dx * dx + dy * dy;

          let mx = 0;
          let my = 0;
          if (dSq < MOUSE_DIST_SQ && dSq > 0) {
            const d = Math.sqrt(dSq);
            const pull = (1 - d / MOUSE_DIST) * MOUSE_PULL;
            mx = (dx / d) * pull;
            my = (dy / d) * pull;
          }

          node.x += node.vx + mx;
          node.y += node.vy + my;

          if (node.x < 0) { node.x = 0; node.vx = Math.abs(node.vx); }
          else if (node.x > W) { node.x = W; node.vx = -Math.abs(node.vx); }
          if (node.y < 0) { node.y = 0; node.vy = Math.abs(node.vy); }
          else if (node.y > H) { node.y = H; node.vy = -Math.abs(node.vy); }
        }

        ctx.beginPath();
        ctx.fillStyle = nodeColor;
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < nodes.length - 1; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dSq = dx * dx + dy * dy;
          if (dSq < CONNECT_DIST_SQ) {
            const alpha = (lineMaxAlpha * (1 - Math.sqrt(dSq) / CONNECT_DIST)).toFixed(3);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${LINE_R},${LINE_G},${LINE_B},${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    // Pause rAF loop when canvas leaves viewport; restart on re-entry
    let running = false;

    const loop = () => {
      draw();
      if (running) animId = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (!running) { running = true; animId = requestAnimationFrame(loop); }
    };

    const stopLoop = () => {
      running = false;
      cancelAnimationFrame(animId);
    };

    let visibilityObserver: IntersectionObserver | null = null;

    if (prefersReduced) {
      draw();
    } else if (subtle) {
      // Fixed canvas covers the full viewport — always visible, never pause
      startLoop();
    } else {
      // Hero-local canvas: pause rAF when hero scrolls out of view
      visibilityObserver = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) startLoop(); else stopLoop(); },
        { threshold: 0 }
      );
      visibilityObserver.observe(canvas);
    }

    const handleResize = () => {
      const prev = syncSize();
      if (canvas.width === 0 || canvas.height === 0) return;
      const sx = canvas.width / (prev.w || canvas.width);
      const sy = canvas.height / (prev.h || canvas.height);
      for (const node of nodes) {
        node.x *= sx;
        node.y *= sy;
      }
      if (prefersReduced) draw();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (subtle) {
        // Global layer: interact only in upper 60% of viewport (hero zone)
        if (e.clientY <= canvas.height * 0.6) {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
        } else {
          mouse.x = -9999;
          mouse.y = -9999;
        }
      } else {
        // Section canvas: interact when cursor is within the canvas bounds
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          mouse.x = x;
          mouse.y = y;
        } else {
          mouse.x = -9999;
          mouse.y = -9999;
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stopLoop();
      visibilityObserver?.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (subtle) {
    return (
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
