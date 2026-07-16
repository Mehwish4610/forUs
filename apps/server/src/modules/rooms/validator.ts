import { z } from "zod";

export const createRoomSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3)
    .max(50),

  description: z
    .string()
    .trim()
    .max(250)
    .optional(),

  roomType: z.enum([
    "STUDY",
    "FAMILY",
    "WORK",
    "GAMING",
    "FRIENDS",
    "CUSTOM",
  ]),

  retentionPolicy: z.enum([
    "UNTIL_EMPTY",
    "ONE_DAY",
    "SEVEN_DAYS",
    "THIRTY_DAYS",
  ]),

  maxMembers: z
    .number()
    .int()
    .min(2)
    .max(100),
});

export type CreateRoomDto = z.infer<typeof createRoomSchema>;

export const joinRoomSchema = z.object({
  inviteCode: z
    .string()
    .trim()
    .transform((value) => value.toUpperCase())
    .refine(
      (value) => /^[A-Z2-9]{8}$/.test(value),
      "Invite code must be exactly 8 characters."
    ),
});

export type JoinRoomDto = z.infer<typeof joinRoomSchema>;