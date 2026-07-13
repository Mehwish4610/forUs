import AuroraBackground from "@/components/background/AuroraBackground";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import RoomOverviewCards from "@/features/dashboard/components/RoomOverviewCards";
import WelcomePanel from "@/features/dashboard/components/WelcomePanel";

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-10 text-white">
      <AuroraBackground />

      <div className="mx-auto max-w-6xl">
        <DashboardHeader />
        <WelcomePanel />
        <RoomOverviewCards />
      </div>
    </main>
  );
}