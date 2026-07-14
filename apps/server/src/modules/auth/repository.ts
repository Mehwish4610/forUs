import { prisma } from "../../lib/prisma.js";

export function createGuestUserRecord(displayName: string) {
  return prisma.user.create({
    data: {
      displayName,
      isGuest: true,
    },
    select: {
      id: true,
      displayName: true,
      isGuest: true,
      avatarUrl: true,
      createdAt: true,
    },
  });
}

export function findUserById(id: string) {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      displayName: true,
      isGuest: true,
      avatarUrl: true,
      createdAt: true,
    },
  });
}