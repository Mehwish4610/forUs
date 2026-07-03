import type { NextFunction, Request, Response } from "express";
import { sendError } from "../utils/apiResponse.js";

export function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(error);

  return sendError(res, 500, "Internal server error");
}