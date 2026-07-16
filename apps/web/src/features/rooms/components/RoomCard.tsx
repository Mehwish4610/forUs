import {
  ArrowRight,
  CalendarDays,
  Hash,
  Lock,
  Unlock,
  Users,
} from "lucide-react";

import type { Room } from "../types";

type RoomCardProps = {
  room: Room;
};

function formatRoomType(roomType: Room["roomType"]) {
  return roomType.charAt(0) + roomType.slice(1).toLowerCase();
}

function formatCreatedAt(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:border-emerald-400/30 hover:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h4 className="truncate text-lg font-semibold text-white">
            {room.name}
          </h4>

          <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-400">
            {room.description || "No description provided."}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          {formatRoomType(room.roomType)}
        </span>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-cyan-300" />

          <span>
            {room.memberCount}/{room.maxMembers} members
          </span>
        </div>

        <div className="flex items-center gap-2">
          {room.isPrivate ? (
            <Lock className="h-4 w-4 text-emerald-300" />
          ) : (
            <Unlock className="h-4 w-4 text-cyan-300" />
          )}

          <span>{room.isPrivate ? "Private" : "Public"}</span>
        </div>

        <div className="flex items-center gap-2">
          <Hash className="h-4 w-4 text-slate-300" />

          <span className="font-mono tracking-wide">
            {room.inviteCode}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-slate-300" />

          <span>{formatCreatedAt(room.createdAt)}</span>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <a
          href={`/rooms/${room.id}`}
          className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-white/5 hover:text-white"
        >
          Open Room
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </article>
  );
}