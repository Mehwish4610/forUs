import { useMutation, useQueryClient } from "@tanstack/react-query";
import { joinRoom } from "../services/roomsService";
import type { JoinRoomRequest } from "../types";

export function useJoinRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: JoinRoomRequest) => joinRoom(payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
  });
}