import { signAccessToken } from "../../lib/jwt.js";
import {
  createGuestUserRecord,
  findUserById,
} from "./repository.js";
import type { GuestAuthInput } from "./validator.js";

export async function createGuestUser(input: GuestAuthInput) {
  const user = await createGuestUserRecord(input.displayName);

  const token = signAccessToken({
    id: user.id,
    displayName: user.displayName,
    isGuest: user.isGuest,
  });

  return {
    user,
    token,
  };
}

export async function getUserById(id: string) {
  return findUserById(id);
}