import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-dark-900/10 dark:bg-white/10 text-dark-900/80 dark:text-white/80",
    primary: "bg-primary-500/20 text-primary-500 border border-primary-500/30",
    accent: "bg-accent/20 text-accent border border-accent/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}