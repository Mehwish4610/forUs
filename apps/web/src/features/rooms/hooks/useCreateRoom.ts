import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRoom } from "../services/roomsService";
import type { CreateRoomRequest } from "../types";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateRoomRequest) => createRoom(payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
  });
}