import {
  MessageCircle,
  Plus,
  Users,
} from "lucide-react";

import {
  Button,
  Card,
} from "@/components/ui";

import RoomCard from "@/features/rooms/components/RoomCard";
import { useRooms } from "@/features/rooms/hooks/useRooms";


type RoomOverviewCardsProps = {
  onCreateRoom: () => void;
  onJoinRoom: () => void;
};

export default function RoomOverviewCards({
  onCreateRoom,
  onJoinRoom,
}: RoomOverviewCardsProps) {
  const roomsQuery = useRooms();

  if (roomsQuery.isLoading) {
    return (
      <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
        <Card>
          <p className="text-slate-400">
            Loading your rooms...
          </p>
        </Card>

        <Card>
          <p className="text-slate-400">
            Loading joined rooms...
          </p>
        </Card>
      </div>
    );
  }

  if (roomsQuery.isError) {
    return (
      <Card className="mt-8">
        <p className="text-red-300">
          {roomsQuery.error instanceof Error
            ? roomsQuery.error.message
            : "Unable to load rooms."}
        </p>

        <Button
          type="button"
          className="mt-4"
          variant="secondary"
          onClick={() => roomsQuery.refetch()}
        >
          Try again
        </Button>
      </Card>
    );
  }

  const ownedRooms =
    roomsQuery.data?.data.ownedRooms ?? [];

  const joinedRooms =
    roomsQuery.data?.data.joinedRooms ?? [];

  return (
    <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
      <Card>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MessageCircle className="h-5 w-5 text-emerald-300" />

            <h3 className="text-xl font-semibold text-white">
              My Rooms
            </h3>
          </div>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
            {ownedRooms.length}
          </span>
        </div>

        {ownedRooms.length > 0 ? (
          <div className="mt-5 space-y-4">
            {ownedRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room} />
            ))}

            <Button
              type="button"
              className="mt-2"
              variant="secondary"
              onClick={onCreateRoom}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create another room
            </Button>
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-center">
            <MessageCircle className="mx-auto h-8 w-8 text-emerald-300" />

            <h4 className="mt-4 font-semibold text-white">
              No rooms yet
            </h4>

            <p className="mt-2 text-sm text-slate-400">
              Create your first private room to get started.
            </p>

            <Button
              type="button"
              className="mt-5"
              variant="secondary"
              onClick={onCreateRoom}
            >
              Create your first room
            </Button>
          </div>
        )}
      </Card>

      <Card>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-cyan-300" />

            <h3 className="text-xl font-semibold text-white">
              Joined Rooms
            </h3>
          </div>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
            {joinedRooms.length}
          </span>
        </div>

        {joinedRooms.length > 0 ? (
          <div className="mt-5 space-y-4">
            {joinedRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
              />
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-center">
            <Users className="mx-auto h-8 w-8 text-cyan-300" />

            <h4 className="mt-4 font-semibold text-white">
              No joined rooms
            </h4>

            <p className="mt-2 text-sm text-slate-400">
              Join a room using an invite code shared with you.
            </p>

            <Button
              type="button"
              className="mt-5"
              variant="secondary"
              onClick={onJoinRoom}
            >
              Join a room
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}