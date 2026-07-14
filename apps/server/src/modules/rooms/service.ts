import { randomInt } from "node:crypto";
import { toRoomResponse } from "./mapper.js";
import { createRoomRecord } from "./repository.js";
import type { CreateRoomDto } from "./validator.js";

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