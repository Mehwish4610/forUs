import type { ReactNode } from "react";
import AuroraBackground from "@/components/background/AuroraBackground";
import Navbar from "@/components/layout/Navbar";

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <AuroraBackground />
      <Navbar />

      <div className="relative z-10">{children}</div>
    </main>
  );
}