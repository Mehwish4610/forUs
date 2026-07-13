import { Plus, Users } from "lucide-react";
import { Button, GlassPanel } from "@/components/ui";
import { useAuth } from "@/features/auth/context/AuthContext";

export default function WelcomePanel() {
  const { user } = useAuth();

  return (
    <GlassPanel className="mt-10 p-8">
      <p className="text-sm text-emerald-300">Welcome back,</p>
      <h2 className="mt-2 text-4xl font-bold">{user?.displayName} 👋</h2>

      <p className="mt-3 max-w-2xl text-slate-400">
        Create a private room, join your people, and start conversations that
        stay simple and secure.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Room
        </Button>

        <Button variant="secondary">
          <Users className="mr-2 h-4 w-4" />
          Join Room
        </Button>
      </div>
    </GlassPanel>
  );
}