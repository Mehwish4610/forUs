import { Router } from "express";
import { authenticate } from "../../middleware/authenticate.js";
import {
  createGuestSession,
  getCurrentUser,
  logoutUser,
} from "./controller.js";

const authRoutes = Router();

authRoutes.post("/guest", createGuestSession);
authRoutes.get("/me", authenticate, getCurrentUser);
authRoutes.post("/logout", authenticate, logoutUser);
export default authRoutes;