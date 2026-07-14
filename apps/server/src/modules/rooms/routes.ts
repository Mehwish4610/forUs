import { Router } from "express";
import { authenticate } from "../../middleware/authenticate.js";
import { createRoomController } from "./controller.js";

const roomRoutes = Router();

roomRoutes.post("/", authenticate, createRoomController);

export default roomRoutes;