import { cn } from "@/lib/utils";

interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function TechTag({ children, className }: TechTagProps) {
  return (
    <span
      className={cn(
        "text-xs px-2 py-1 rounded-md bg-dark-900/5 dark:bg-white/5 text-dark-900/50 dark:text-white/50 border border-dark-900/10 dark:border-white/10",
        className
      )}
    >
      {children}
    </span>
  );
}
