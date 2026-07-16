import type { NextFunction, Request, Response } from "express";
import { sendError, sendSuccess } from "../../utils/apiResponse.js";
import {
  createRoom,
  getRoomDetails,
  getRoomsForUser,
  joinRoom,
} from "./service.js";
import { createRoomSchema } from "./validator.js";
import { RoomError } from "./errors.js";
import { joinRoomSchema } from "./validator.js";


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

export async function getRoomsController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    if (!req.user) {
      return sendError(res, 401, "Authentication required");
    }

    const rooms = await getRoomsForUser(req.user.id);

    return sendSuccess(res, 200, "Rooms fetched successfully", rooms);
  } catch (error) {
    next(error);
  }
}

export async function joinRoomController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    if (!req.user) {
      return sendError(
        res,
        401,
        "Authentication required",
      );
    }

    const parsed = joinRoomSchema.safeParse(req.body);

    if (!parsed.success) {
      return sendError(
        res,
        400,
        "Invalid invite code.",
        parsed.error.flatten().fieldErrors,
      );
    }

    const room = await joinRoom(
      parsed.data,
      req.user.id,
    );

    return sendSuccess(
      res,
      200,
      "Joined room successfully.",
      {
        room,
      },
    );
  } catch (error) {
    if (error instanceof RoomError) {
      return sendError(
        res,
        error.status,
        error.message,
      );
    }

    next(error);
  }
}

export async function getRoomDetailsController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    if (!req.user) {
      return sendError(res, 401, "Authentication required");
    }

    const roomIdParam = req.params.roomId;

    if (!roomIdParam || Array.isArray(roomIdParam)) {
      return sendError(res, 400, "Valid room ID is required");
    }

    const room = await getRoomDetails(
      roomIdParam,
      req.user.id,
    );

    return sendSuccess(
      res,
      200,
      "Room details fetched successfully",
      {
        room,
      },
    );
  } catch (error) {
    if (error instanceof RoomError) {
      return sendError(
        res,
        error.status,
        error.message,
      );
    }

    next(error);
  }
}