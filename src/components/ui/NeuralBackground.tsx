"use client";

import { useCallback } from "react";
import { ParticlesProvider, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function NeuralBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div aria-hidden="true" role="presentation">
    <ParticlesProvider init={init}>
      <Particles
        id="neural-bg"
        className="fixed inset-0 z-0 pointer-events-none"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 60 },
            color: { value: ["#1A56DB", "#8B5CF6"] },
            opacity: { value: 0.4 },
            size: { value: { min: 2, max: 3 } },
            links: {
              enable: true,
              opacity: 0.15,
              distance: 120,
              color: "#8B5CF6",
            },
            move: {
              enable: true,
              speed: 0.8,
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
    </div>
  );
}
