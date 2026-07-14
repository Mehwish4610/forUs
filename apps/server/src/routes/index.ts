import { Router } from "express";
import authRoutes from "../modules/auth/routes.js";
import roomRoutes from "../modules/rooms/routes.js";

const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/rooms", roomRoutes);

export default routes;