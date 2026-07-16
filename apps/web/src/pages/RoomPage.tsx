import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Copy,
  Crown,
  Hash,
  Lock,
  MessageCircle,
  Shield,
  Unlock,
  Users,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";
import {
  Avatar,
  Button,
  Card,
  GlassPanel,
} from "@/components/ui";
import { useRoomDetails } from "@/features/rooms/hooks/useRoomDetails";
import type { RoomMemberRole } from "@/features/rooms/types";

function formatLabel(value: string) {
  return value
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatDate(value: string) {
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

function RoleIcon({ role }: { role: RoomMemberRole }) {
  if (role === "OWNER") {
    return <Crown className="h-4 w-4 text-amber-300" />;
  }

  if (role === "ADMIN") {
    return <Shield className="h-4 w-4 text-cyan-300" />;
  }

  return null;
}

export default function RoomPage() {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();
  const roomQuery = useRoomDetails(roomId);

  const [inviteCopied, setInviteCopied] = useState(false);

  async function handleCopyInviteCode(inviteCode: string) {
    try {
      await navigator.clipboard.writeText(inviteCode);
      setInviteCopied(true);

      window.setTimeout(() => {
        setInviteCopied(false);
      }, 2000);
    } catch {
      setInviteCopied(false);
    }
  }

  if (!roomId) {
    return (
      <DashboardLayout>
        <Card className="mt-10">
          <h1 className="text-xl font-semibold text-white">
            Invalid room
          </h1>

          <p className="mt-2 text-slate-400">
            The room address is incomplete or invalid.
          </p>

          <Button
            type="button"
            variant="secondary"
            className="mt-5"
            onClick={() => navigate("/dashboard")}
          >
            Return to dashboard
          </Button>
        </Card>
      </DashboardLayout>
    );
  }

  if (roomQuery.isLoading) {
    return (
      <DashboardLayout>
        <div className="mt-10 space-y-6">
          <div className="h-12 w-44 animate-pulse rounded-xl bg-white/[0.06]" />

          <div className="h-64 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />

          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            <div className="h-80 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />
            <div className="h-80 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (roomQuery.isError || !roomQuery.data?.data?.room) {
    return (
      <DashboardLayout>
        <Card className="mt-10">
          <h1 className="text-xl font-semibold text-white">
            Unable to open room
          </h1>

          <p className="mt-2 text-red-300">
            {roomQuery.error instanceof Error
              ? roomQuery.error.message
              : "The room could not be loaded."}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              type="button"
              variant="secondary"
              onClick={() => roomQuery.refetch()}
            >
              Try again
            </Button>

            <Button
              type="button"
              variant="ghost"
              onClick={() => navigate("/dashboard")}
            >
              Return to dashboard
            </Button>
          </div>
        </Card>
      </DashboardLayout>
    );
  }

  const room = roomQuery.data.data.room;

  return (
    <DashboardLayout>
      <div className="pb-16">
        <div className="mt-8">
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to dashboard
          </Button>
        </div>

        <GlassPanel className="mt-6 p-7 sm:p-8">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-start">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="break-words text-3xl font-bold text-white sm:text-4xl">
                  {room.name}
                </h1>

                {room.isOwner && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-200">
                    <Crown className="h-3.5 w-3.5" />
                    Owner
                  </span>
                )}

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  {formatLabel(room.roomType)}
                </span>
              </div>

              <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                {room.description || "No description provided."}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-cyan-300" />
                  {room.memberCount}/{room.maxMembers} members
                </span>

                <span className="flex items-center gap-2">
                  {room.isPrivate ? (
                    <Lock className="h-4 w-4 text-emerald-300" />
                  ) : (
                    <Unlock className="h-4 w-4 text-cyan-300" />
                  )}

                  {room.isPrivate ? "Private room" : "Public room"}
                </span>

                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-slate-300" />
                  Created {formatDate(room.createdAt)}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 lg:min-w-72">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Invite code
              </p>

              <div className="mt-3 flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-2">
                  <Hash className="h-4 w-4 shrink-0 text-slate-400" />

                  <span className="truncate font-mono text-lg tracking-[0.18em] text-white">
                    {room.inviteCode}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleCopyInviteCode(room.inviteCode)
                  }
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
                  aria-label="Copy invite code"
                >
                  {inviteCopied ? (
                    <Check className="h-5 w-5 text-emerald-300" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                {inviteCopied
                  ? "Invite code copied."
                  : "Share this code with people you trust."}
              </p>
            </div>
          </div>
        </GlassPanel>

        <div className="mt-7 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <Card>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-emerald-300" />

                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Room chat
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Messages shared inside this room will appear here.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10">
                  <MessageCircle className="h-7 w-7 text-emerald-300" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  Start the conversation
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                  Realtime messaging, typing indicators, reactions and
                  attachments will be added here in the next stage.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-white">
                Room information
              </h2>

              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <dt className="text-sm text-slate-500">
                    Room type
                  </dt>

                  <dd className="mt-1 font-medium text-white">
                    {formatLabel(room.roomType)}
                  </dd>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <dt className="text-sm text-slate-500">
                    Chat retention
                  </dt>

                  <dd className="mt-1 font-medium text-white">
                    {formatLabel(room.retentionPolicy)}
                  </dd>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <dt className="text-sm text-slate-500">
                    Visibility
                  </dt>

                  <dd className="mt-1 font-medium text-white">
                    {room.isPrivate ? "Private" : "Public"}
                  </dd>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <dt className="text-sm text-slate-500">
                    Created by
                  </dt>

                  <dd className="mt-1 font-medium text-white">
                    {room.owner.displayName}
                  </dd>
                </div>
              </dl>
            </Card>
          </div>

          <aside>
            <Card>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-cyan-300" />

                  <h2 className="text-xl font-semibold text-white">
                    Members
                  </h2>
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
                  {room.members.length}
                </span>
              </div>

              <div className="aurora-scrollbar mt-5 max-h-[32rem] space-y-3 overflow-y-auto pr-1">
                {room.members.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <Avatar name={member.displayName} />

                      <div className="min-w-0">
                        <p className="truncate font-medium text-white">
                          {member.displayName}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                          {member.isGuest
                            ? "Guest account"
                            : "Registered account"}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-1.5 text-xs text-slate-400">
                      <RoleIcon role={member.role} />
                      <span>{formatLabel(member.role)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}