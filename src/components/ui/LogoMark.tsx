import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
}

export default function LogoMark({ className }: LogoMarkProps) {
  return (
    <span className={cn("font-mono font-bold", className)}>
      <span className="text-primary-500">&lt;</span>
      {" FV "}
      <span className="text-primary-500">/&gt;</span>
    </span>
  );
}
