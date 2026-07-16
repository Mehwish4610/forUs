import { apiFetch } from "@/lib/api";
import type {
  CreateRoomRequest,
  CreateRoomResponse,
  JoinRoomRequest,
  JoinRoomResponse,
  RoomDetailsResponse,
  RoomsResponse,
} from "../types";

export function createRoom(
  payload: CreateRoomRequest,
): Promise<CreateRoomResponse> {
  return apiFetch<CreateRoomResponse>("/rooms", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getRooms(): Promise<RoomsResponse> {
  return apiFetch<RoomsResponse>("/rooms");
}

export function joinRoom(
  payload: JoinRoomRequest,
): Promise<JoinRoomResponse> {
  return apiFetch<JoinRoomResponse>("/rooms/join", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getRoomDetails(
  roomId: string,
): Promise<RoomDetailsResponse> {
  return apiFetch<RoomDetailsResponse>(`/rooms/${roomId}`);
}