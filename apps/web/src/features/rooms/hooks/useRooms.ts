import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../services/roomsService";

export function useRooms() {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
}