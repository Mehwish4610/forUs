import type { Room } from "../../generated/prisma/client.js";
import type { RoomResponse } from "./dto.js";

type RoomWithMemberCount = Room & {
  _count: {
    members: number;
  };
};

export function toRoomResponse(room: RoomWithMemberCount): RoomResponse {
  return {
    id: room.id,
    name: room.name,
    description: room.description,
    roomType: room.roomType,
    retentionPolicy: room.retentionPolicy,
    maxMembers: room.maxMembers,
    memberCount: room._count.members,
    isPrivate: room.isPrivate,
    inviteCode: room.inviteCode,
    ownerId: room.ownerId,
    createdAt: room.createdAt,
  };
}