import { LogOut } from "lucide-react";
import { Button } from "@/components/ui";
import { useAuth } from "@/features/auth/context/AuthContext";

export default function DashboardHeader() {
  const { logout } = useAuth();

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-emerald-400">forUs</h1>

      <Button variant="ghost" onClick={logout}>
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </header>
  );
}