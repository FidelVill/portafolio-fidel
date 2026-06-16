import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techColorMap: Record<string, string> = {
  React: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "React Native": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Laravel: "bg-red-500/10 text-red-400 border-red-500/20",
  Flutter: "bg-blue-400/10 text-blue-300 border-blue-400/20",
  Supabase: "bg-green-500/10 text-green-400 border-green-500/20",
  Firebase: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "OpenAI API": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Tailwind CSS": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  TypeScript: "bg-blue-600/10 text-blue-400 border-blue-600/20",
  MySQL: "bg-orange-600/10 text-orange-300 border-orange-600/20",
};

export function getTechColor(tech: string): string {
  return techColorMap[tech] ?? "";
}