import DashboardLayout from "@/layouts/DashboardLayout";
import RoomOverviewCards from "@/features/dashboard/components/RoomOverviewCards";
import WelcomePanel from "@/features/dashboard/components/WelcomePanel";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <WelcomePanel />
      <RoomOverviewCards />
    </DashboardLayout>
  );
}