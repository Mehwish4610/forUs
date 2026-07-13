import { MessageCircle, Users } from "lucide-react";
import { Button, Card } from "@/components/ui";

export default function RoomOverviewCards() {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <Card>
        <div className="flex items-center gap-3">
          <MessageCircle className="h-5 w-5 text-emerald-300" />
          <h3 className="text-xl font-semibold">My Rooms</h3>
        </div>

        <p className="mt-3 text-slate-400">
          You have not created any rooms yet.
        </p>

        <Button className="mt-6" variant="secondary">
          Create your first room
        </Button>
      </Card>

      <Card>
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-cyan-300" />
          <h3 className="text-xl font-semibold">Joined Rooms</h3>
        </div>

        <p className="mt-3 text-slate-400">Rooms you join will appear here.</p>

        <Button className="mt-6" variant="secondary">
          Join a room
        </Button>
      </Card>
    </div>
  );
}