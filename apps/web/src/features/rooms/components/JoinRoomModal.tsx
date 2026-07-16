import { useEffect, useState, type FormEvent } from "react";
import { Hash } from "lucide-react";

import Modal from "@/components/dialogs/Modal";
import { Button } from "@/components/ui";

import { useJoinRoom } from "../hooks/useJoinRoom";

type JoinRoomModalProps = {
  open: boolean;
  onClose: () => void;
};

function normalizeInviteCode(value: string) {
  return value
    .toUpperCase()
    .replace(/[^A-Z2-9]/g, "")
    .slice(0, 8);
}

export default function JoinRoomModal({
  open,
  onClose,
}: JoinRoomModalProps) {
  const joinRoomMutation = useJoinRoom();

  const [inviteCode, setInviteCode] = useState("");
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    if (open) return;

    setInviteCode("");
    setValidationError("");
    joinRoomMutation.reset();
  }, [open, joinRoomMutation]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (inviteCode.length !== 8) {
      setValidationError(
        "Invite code must contain exactly 8 characters.",
      );
      return;
    }

    setValidationError("");

    try {
      await joinRoomMutation.mutateAsync({
        inviteCode,
      });

      onClose();
    } catch {
      // The mutation error is displayed below the input.
    }
  }

  function handleClose() {
    if (joinRoomMutation.isPending) return;

    setInviteCode("");
    setValidationError("");
    joinRoomMutation.reset();
    onClose();
  }

  return (
    <Modal
      open={open}
      title="Join a Room"
      description="Enter the 8-character invite code shared with you."
      onClose={handleClose}
      closeDisabled={joinRoomMutation.isPending}
      maxWidthClassName="max-w-md"
    >
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="invite-code"
          className="text-sm font-medium text-slate-200"
        >
          Invite code
        </label>

        <div className="relative mt-2">
          <Hash className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

          <input
            id="invite-code"
            value={inviteCode}
            onChange={(event) => {
              setInviteCode(
                normalizeInviteCode(event.target.value),
              );
              setValidationError("");
              joinRoomMutation.reset();
            }}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-12 pr-4 font-mono text-lg uppercase tracking-[0.25em] text-white outline-none transition placeholder:tracking-normal focus:border-emerald-400"
            placeholder="ABCD2345"
            autoComplete="off"
            autoFocus
          />
        </div>

        <p className="mt-2 text-xs text-slate-500">
          {inviteCode.length}/8 characters
        </p>

        {validationError && (
          <p className="mt-3 text-sm text-red-400">
            {validationError}
          </p>
        )}

        {joinRoomMutation.isError && (
          <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {joinRoomMutation.error instanceof Error
              ? joinRoomMutation.error.message
              : "Unable to join the room. Please try again."}
          </p>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={handleClose}
            disabled={joinRoomMutation.isPending}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={
              inviteCode.length !== 8 ||
              joinRoomMutation.isPending
            }
          >
            {joinRoomMutation.isPending
              ? "Joining..."
              : "Join Room"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}