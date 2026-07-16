import { Router } from "express";
import { authenticate } from "../../middleware/authenticate.js";
import {
  createRoomController,
  getRoomsController,
  getRoomDetailsController,
  joinRoomController,
} from "./controller.js";

const roomRoutes = Router();

roomRoutes.use(authenticate);

roomRoutes.post("/", createRoomController);
roomRoutes.get("/:roomId", getRoomDetailsController);
roomRoutes.get("/", getRoomsController);
roomRoutes.post("/join", joinRoomController);

export default roomRoutes;