import type { NextFunction, Request, Response } from "express";
import { sendError, sendSuccess } from "../../utils/apiResponse.js";
import { createRoom } from "./service.js";
import { createRoomSchema } from "./validator.js";

export async function createRoomController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    if (!req.user) {
      return sendError(res, 401, "Authentication required");
    }

    const parsed = createRoomSchema.safeParse(req.body);

    if (!parsed.success) {
      return sendError(
        res,
        400,
        "Invalid room details",
        parsed.error.flatten().fieldErrors,
      );
    }

    const room = await createRoom(parsed.data, req.user.id);

    return sendSuccess(res, 201, "Room created successfully", {
      room,
    });
  } catch (error) {
    next(error);
  }
}