import { prisma } from "../../lib/prisma.js";
import type { CreateRoomDto } from "./validator.js";

type CreateRoomRecordInput = CreateRoomDto & {
  ownerId: string;
  inviteCode: string;
};

export function createRoomRecord(input: CreateRoomRecordInput) {
  return prisma.room.create({
    data: {
      name: input.name,
      description: input.description,
      roomType: input.roomType,
      retentionPolicy: input.retentionPolicy,
      maxMembers: input.maxMembers,
      isPrivate: input.isPrivate,
      inviteCode: input.inviteCode,
      ownerId: input.ownerId,

      members: {
        create: {
          userId: input.ownerId,
          role: "OWNER",
        },
      },
    },
  });
}