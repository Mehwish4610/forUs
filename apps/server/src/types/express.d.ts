import type { AuthPayload } from "../lib/jwt.js";

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload;
    }
  }
}