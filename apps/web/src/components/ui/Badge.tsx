import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type BadgeVariant = "default" | "success" | "info" | "warning";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  default: "border-slate-700 bg-slate-800 text-slate-300",
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  info: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  warning: "border-amber-500/30 bg-amber-500/10 text-amber-300",
};

export default function Badge({
  children,
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}