import type { Request, Response } from "express";
import { sendError, sendSuccess } from "../../utils/apiResponse.js";
import { setAuthCookie } from "../../utils/cookies.js";
import { createGuestUser } from "./service.js";
import { guestAuthSchema } from "./validator.js";
import { clearAuthCookie } from "../../utils/cookies.js";

export function createGuestSession(req: Request, res: Response) {
  const parsed = guestAuthSchema.safeParse(req.body);

  if (!parsed.success) {
    return sendError(
      res,
      400,
      "Invalid guest details",
      parsed.error.flatten().fieldErrors
    );
  }

  const { user, token } = createGuestUser(parsed.data);

  setAuthCookie(res, token);

  return sendSuccess(res, 201, "Guest session created successfully", {
    user,
  });
}

export function getCurrentUser(req: Request, res: Response) {
  return sendSuccess(res, 200, "Current user fetched successfully", {
    user: req.user,
  });
}

export function logoutUser(_req: Request, res: Response) {
  clearAuthCookie(res);

  return sendSuccess(res, 200, "Logged out successfully");
}