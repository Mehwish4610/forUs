import { randomInt } from "node:crypto";
import { toRoomResponse } from "./mapper.js";
import {
  addMemberToRoom,
  createRoomRecord,
  findJoinedRooms,
  findMembership,
  findOwnedRooms,
  findRoomByInviteCode,
} from "./repository.js";
import type { CreateRoomDto } from "./validator.js";
import { RoomError } from "./errors.js";
import type { JoinRoomDto } from "./validator.js";
import { findRoomDetailsById } from "./repository.js";


const INVITE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const INVITE_CODE_LENGTH = 8;

function generateInviteCode(): string {
  return Array.from(
    { length: INVITE_CODE_LENGTH },
    () => INVITE_ALPHABET[randomInt(INVITE_ALPHABET.length)],
  ).join("");
}

export async function createRoom(
  input: CreateRoomDto,
  ownerId: string,
) {
  const room = await createRoomRecord({
    ...input,
    ownerId,
    inviteCode: generateInviteCode(),
  });

  return toRoomResponse(room);
}

export async function getRoomsForUser(userId: string) {
  const [ownedRooms, joinedRooms] = await Promise.all([
    findOwnedRooms(userId),
    findJoinedRooms(userId),
  ]);

  return {
    ownedRooms: ownedRooms.map(toRoomResponse),
    joinedRooms: joinedRooms.map(toRoomResponse),
  };
}

export async function joinRoom(input: JoinRoomDto, userId: string) {
  const room = await findRoomByInviteCode(input.inviteCode);

  if (!room) {
    throw new RoomError(404, "Room not found.");
  }

  const membership = await findMembership(room.id, userId);

  if (membership) {
    throw new RoomError(409, "You're already a member of this room.");
  }

  if (room._count.members >= room.maxMembers) {
    throw new RoomError(
      409,
      "This room has reached its member limit.",
    );
  }

  await addMemberToRoom(room.id, userId);

  const updatedRoom = await findRoomByInviteCode(input.inviteCode);

  if (!updatedRoom) {
    throw new RoomError(404, "Room not found.");
  }

  return toRoomResponse(updatedRoom);
}

export async function getRoomDetails(
  roomId: string,
  userId: string,
) {
  const room = await findRoomDetailsById(roomId);

  if (!room) {
    throw new RoomError(404, "Room not found.");
  }

  const membership = room.members.find(
    (member) => member.userId === userId,
  );

  if (!membership) {
    throw new RoomError(
      403,
      "You do not have access to this room.",
    );
  }

  return {
    ...toRoomResponse(room),
    owner: room.owner,
    members: room.members.map((member) => ({
      id: member.user.id,
      displayName: member.user.displayName,
      avatarUrl: member.user.avatarUrl,
      isGuest: member.user.isGuest,
      role: member.role,
      joinedAt: member.joinedAt,
    })),
    isOwner: room.ownerId === userId,
  };
}