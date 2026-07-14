import type { Request, Response } from "express";
import { sendError, sendSuccess } from "../../utils/apiResponse.js";
import { setAuthCookie } from "../../utils/cookies.js";
import {
  createGuestUser,
  getUserById,
} from "./service.js";
import { guestAuthSchema } from "./validator.js";
import { clearAuthCookie } from "../../utils/cookies.js";

export async function createGuestSession(req: Request, res: Response) {
  const parsed = guestAuthSchema.safeParse(req.body);

  if (!parsed.success) {
    return sendError(
      res,
      400,
      "Invalid guest details",
      parsed.error.flatten().fieldErrors
    );
  }

  const { user, token } = await createGuestUser(parsed.data);

  setAuthCookie(res, token);

  return sendSuccess(res, 201, "Guest session created successfully", {
    user,
  });
}

export async function getCurrentUser(req: Request, res: Response) {
  if (!req.user) {
    return sendError(res, 401, "Authentication required");
  }

  const user = await getUserById(req.user.id);

  if (!user) {
    clearAuthCookie(res);
    return sendError(res, 401, "User session no longer exists");
  }

  return sendSuccess(res, 200, "Current user fetched successfully", {
    user,
  });
}


export async function logoutUser(_req: Request, res: Response) {
  clearAuthCookie(res);

  return sendSuccess(res, 200, "Logged out successfully");
}