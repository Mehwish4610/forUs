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

  isPrivate: z.boolean(),
});

export type CreateRoomDto = z.infer<typeof createRoomSchema>;