import type { ReactNode } from "react";
import AuroraBackground from "@/components/background/AuroraBackground";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-10 text-white">
      <AuroraBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <DashboardHeader />
        {children}
      </div>
    </main>
  );
}