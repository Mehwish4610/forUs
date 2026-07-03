import type { Request, Response } from "express";
import { sendError, sendSuccess } from "../../utils/apiResponse.js";
import { createGuestUser } from "./service.js";
import { guestAuthSchema } from "./validator.js";

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

  const {user, token} = createGuestUser(parsed.data);

  return sendSuccess(res, 201, "Guest session created successfully", {
    user,
    token,
  });
}