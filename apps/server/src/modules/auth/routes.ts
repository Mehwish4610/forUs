import { Router } from "express";
import { createGuestSession } from "./controller.js";

const authRoutes = Router();

authRoutes.post("/guest", createGuestSession);

export default authRoutes;