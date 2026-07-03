import { z } from "zod";

export const guestAuthSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(2, "Display name must be at least 2 characters")
    .max(24, "Display name must be less than 24 characters")
    .regex(/^[a-zA-Z0-9 _.-]+$/, "Display name contains invalid characters"),
});

export type GuestAuthInput = z.infer<typeof guestAuthSchema>;