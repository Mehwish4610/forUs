import type { Response } from "express";

export function setAuthCookie(
  res: Response,
  token: string
) {
  res.cookie("forUs_session", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });
}

export function clearAuthCookie(
  res: Response
) {
  res.clearCookie("forUs_session");
}