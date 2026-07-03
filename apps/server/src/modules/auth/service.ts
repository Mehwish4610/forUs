import { randomUUID } from "crypto";
import type { GuestAuthInput } from "./validator.js";
import type { GuestUser } from "./types.js";

export function createGuestUser(input: GuestAuthInput): GuestUser {
  return {
    id: randomUUID(),
    displayName: input.displayName,
    isGuest: true,
  };
}