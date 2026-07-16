import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Modal from "@/components/dialogs/Modal";
import { Button } from "@/components/ui";

import { useCreateRoom } from "../hooks/useCreateRoom";
import {
  createRoomSchema,
  type CreateRoomFormInput,
  type CreateRoomFormValues,
} from "../schemas/createRoomSchema";

type CreateRoomModalProps = {
  open: boolean;
  onClose: () => void;
};

const inputClassName =
  "mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-emerald-400";

export default function CreateRoomModal({
  open,
  onClose,
}: CreateRoomModalProps) {
  const createRoomMutation = useCreateRoom();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateRoomFormInput, unknown, CreateRoomFormValues>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: "",
      description: "",
      roomType: "CUSTOM",
      retentionPolicy: "UNTIL_EMPTY",
      maxMembers: 25,
    },
  });

  async function onSubmit(values: CreateRoomFormValues) {
    try {
      await createRoomMutation.mutateAsync(values);
      reset();
      onClose();
    } catch {
      // The mutation error is displayed inside the modal.
    }
  }

  function handleClose() {
    if (createRoomMutation.isPending) return;

    reset();
    createRoomMutation.reset();
    onClose();
  }

  return (
    <Modal
      open={open}
      title="Create Room"
      description="Set up a private space for chatting and calling."
      onClose={handleClose}
      closeDisabled={createRoomMutation.isPending}
      maxWidthClassName="max-w-xl"
    >
      <form
        className="space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="room-name"
            className="text-sm font-medium text-slate-200"
          >
            Room name
          </label>

          <input
            id="room-name"
            {...register("name")}
            className={inputClassName}
            placeholder="Example: Study Group"
            autoComplete="off"
            autoFocus
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="room-description"
            className="text-sm font-medium text-slate-200"
          >
            Description
          </label>

          <textarea
            id="room-description"
            {...register("description")}
            className={`${inputClassName} min-h-24 resize-y`}
            placeholder="Optional description"
          />

          {errors.description && (
            <p className="mt-2 text-sm text-red-400">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="room-type"
              className="text-sm font-medium text-slate-200"
            >
              Room type
            </label>

            <select
              id="room-type"
              {...register("roomType")}
              className={inputClassName}
            >
              <option value="STUDY">Study</option>
              <option value="FAMILY">Family</option>
              <option value="WORK">Work</option>
              <option value="GAMING">Gaming</option>
              <option value="FRIENDS">Friends</option>
              <option value="CUSTOM">Custom</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="retention-policy"
              className="text-sm font-medium text-slate-200"
            >
              Chat retention
            </label>

            <select
              id="retention-policy"
              {...register("retentionPolicy")}
              className={inputClassName}
            >
              <option value="UNTIL_EMPTY">
                Until everyone leaves
              </option>
              <option value="ONE_DAY">1 day</option>
              <option value="SEVEN_DAYS">7 days</option>
              <option value="THIRTY_DAYS">30 days</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="maximum-members"
            className="text-sm font-medium text-slate-200"
          >
            Maximum members
          </label>

          <input
            id="maximum-members"
            {...register("maxMembers")}
            type="number"
            min={2}
            max={100}
            className={inputClassName}
          />

          {errors.maxMembers && (
            <p className="mt-2 text-sm text-red-400">
              {errors.maxMembers.message}
            </p>
          )}
        </div>


        {createRoomMutation.isError && (
          <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {createRoomMutation.error instanceof Error
              ? createRoomMutation.error.message
              : "Unable to create the room. Please try again."}
          </p>
        )}

        <div className="flex justify-end gap-3 pt-2">
          <Button
            type="button"
            variant="secondary"
            onClick={handleClose}
            disabled={createRoomMutation.isPending}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={createRoomMutation.isPending}
          >
            {createRoomMutation.isPending
              ? "Creating..."
              : "Create Room"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}