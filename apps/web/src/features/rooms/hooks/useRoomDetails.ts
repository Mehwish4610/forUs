import { useQuery } from "@tanstack/react-query";
import { getRoomDetails } from "../services/roomsService";

export function useRoomDetails(roomId: string | undefined) {
  return useQuery({
    queryKey: ["rooms", roomId],
    queryFn: () => getRoomDetails(roomId!),
    enabled: Boolean(roomId),
  });
}