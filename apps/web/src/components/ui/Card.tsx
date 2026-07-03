import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/20 transition hover:border-emerald-400/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}