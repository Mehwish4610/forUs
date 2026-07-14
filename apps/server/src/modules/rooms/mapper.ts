import type { Room } from "../../generated/prisma/client.js";
import type { RoomResponse } from "./dto.js";

export function toRoomResponse(room: Room): RoomResponse {
  return {
    id: room.id,
    name: room.name,
    description: room.description,
    roomType: room.roomType,
    retentionPolicy: room.retentionPolicy,
    maxMembers: room.maxMembers,
    isPrivate: room.isPrivate,
    inviteCode: room.inviteCode,
    ownerId: room.ownerId,
    createdAt: room.createdAt,
  };
}