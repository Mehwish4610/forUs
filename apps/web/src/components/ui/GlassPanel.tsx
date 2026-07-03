import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function GlassPanel({
  children,
  className,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-2xl shadow-black/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}