import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
  hover?: boolean;
}

export function GlassCard({ 
  children, 
  className, 
  variant = "light", 
  hover = false 
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border backdrop-blur-md transition-all duration-300",
        variant === "light" 
          ? "glass-morphism" 
          : "glass-morphism-dark",
        hover && "hover:scale-105 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
