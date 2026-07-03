import { randomUUID } from "crypto";
import { signAccessToken } from "../../lib/jwt.js";
import type { GuestUser } from "./types.js";
import type { GuestAuthInput } from "./validator.js";

export function createGuestUser(input: GuestAuthInput) {
  const user: GuestUser = {
    id: randomUUID(),
    displayName: input.displayName,
    isGuest: true,
  };

  const token = signAccessToken(user);

  return {
    user,
    token,
  };
}