import { prisma } from "../../lib/prisma.js";
import type { CreateRoomDto } from "./validator.js";

type CreateRoomRecordInput = CreateRoomDto & {
  ownerId: string;
  inviteCode: string;
};

const roomMemberCount = {
  _count: {
    select: {
      members: true,
    },
  },
} as const;

export function createRoomRecord(input: CreateRoomRecordInput) {
  return prisma.room.create({
    data: {
      name: input.name,
      description: input.description,
      roomType: input.roomType,
      retentionPolicy: input.retentionPolicy,
      maxMembers: input.maxMembers,
      isPrivate: true,
      inviteCode: input.inviteCode,
      ownerId: input.ownerId,

      members: {
        create: {
          userId: input.ownerId,
          role: "OWNER",
        },
      },
    },
    include: roomMemberCount,
  });
}

export function findOwnedRooms(userId: string) {
  return prisma.room.findMany({
    where: {
      ownerId: userId,
    },
    include: roomMemberCount,
    orderBy: {
      createdAt: "desc",
    },
  });
}

export function findJoinedRooms(userId: string) {
  return prisma.room.findMany({
    where: {
      ownerId: {
        not: userId,
      },
      members: {
        some: {
          userId,
        },
      },
    },
    include: roomMemberCount,
    orderBy: {
      createdAt: "desc",
    },
  });
}

export function findRoomByInviteCode(inviteCode: string) {
  return prisma.room.findUnique({
    where: {
      inviteCode,
    },
    include: {
      members: true,
      _count: {
        select: {
          members: true,
        },
      },
    },
  });
}

export function findMembership(roomId: string, userId: string) {
  return prisma.roomMember.findUnique({
    where: {
      roomId_userId: {
        roomId,
        userId,
      },
    },
  });
}

export function addMemberToRoom(roomId: string, userId: string) {
  return prisma.roomMember.create({
    data: {
      roomId,
      userId,
      role: "MEMBER",
    },
  });
}

export function findRoomDetailsById(roomId: string) {
  return prisma.room.findUnique({
    where: {
      id: roomId,
    },
    include: {
      owner: {
        select: {
          id: true,
          displayName: true,
          avatarUrl: true,
        },
      },
      members: {
        orderBy: {
          joinedAt: "asc",
        },
        include: {
          user: {
            select: {
              id: true,
              displayName: true,
              avatarUrl: true,
              isGuest: true,
            },
          },
        },
      },
      _count: {
        select: {
          members: true,
        },
      },
    },
  });
}