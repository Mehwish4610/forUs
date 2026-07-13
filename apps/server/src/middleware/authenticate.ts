import type { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../lib/jwt.js";
import { sendError } from "../utils/apiResponse.js";
import { AUTH_COOKIE_NAME } from "../utils/cookies.js";

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies?.[AUTH_COOKIE_NAME];

  if (!token) {
    return sendError(res, 401, "Authentication required");
  }

  try {
    req.user = verifyAccessToken(token);
    next();
  } catch {
    return sendError(res, 401, "Invalid or expired session");
  }
}