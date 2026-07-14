import { useState } from "react";
import { LogOut } from "lucide-react";
import ConfirmDialog from "@/components/dialogs/ConfirmDialog";
import { Button } from "@/components/ui";
import { useAuth } from "@/features/auth/context/AuthContext";

export default function DashboardHeader() {
  const { user, logout } = useAuth();
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    try {
      setLoggingOut(true);
      await logout();
      setLogoutDialogOpen(false);
    } finally {
      setLoggingOut(false);
    }
  }

  function handleLogoutClick() {
    if (user?.isGuest) {
      setLogoutDialogOpen(true);
      return;
    }

    void handleLogout();
  }

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-emerald-400">forUs</h1>

        <Button
          variant="ghost"
          onClick={handleLogoutClick}
          disabled={loggingOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          {loggingOut ? "Logging out..." : "Logout"}
        </Button>
      </header>

      <ConfirmDialog
        open={logoutDialogOpen}
        title="Leave Guest Session?"
        message="You are using a temporary guest account. If you log out, this guest profile will be removed from this device. Logging in again as a guest, even with the same display name, will create a new profile, and your previously created or joined rooms will no longer be available."
        confirmLabel="Logout"
        loading={loggingOut}
        onCancel={() => setLogoutDialogOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}