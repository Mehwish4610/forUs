import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export type AuthPayload = {
  id: string;
  displayName: string;
  isGuest: boolean;
};

const EXPIRES_IN = "7d";

export function signAccessToken(payload: AuthPayload): string {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: EXPIRES_IN,
  });
}

export function verifyAccessToken(token: string): AuthPayload {
  return jwt.verify(token, env.JWT_SECRET) as AuthPayload;
}