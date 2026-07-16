import { z } from "zod";

export const createRoomSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Room name must contain at least 3 characters.")
    .max(50, "Room name cannot exceed 50 characters."),

  description: z
    .string()
    .trim()
    .max(250, "Description cannot exceed 250 characters.")
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

  maxMembers: z.coerce
    .number()
    .int()
    .min(2, "A room must allow at least 2 people.")
    .max(100, "A room cannot exceed 100 people."),
});

export type CreateRoomFormInput = z.input<typeof createRoomSchema>;
export type CreateRoomFormValues = z.output<typeof createRoomSchema>;