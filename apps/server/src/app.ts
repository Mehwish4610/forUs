import cors from "cors";
import express from "express";
import helmet from "helmet";
import { requestLogger } from "./middleware/requestLogger.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import routes from "./routes/index.js";
import cookieParser from "cookie-parser";
import { prisma } from "./lib/prisma.js";

export const app = express();

app.use(helmet());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
})
);
app.use(express.json());
app.use(requestLogger);

app.use(cookieParser());

app.use("/api", routes);

app.get("/health", async (_req, res, next) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      status: "ok",
      app: "forUs server",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
});

app.use(notFound);
app.use(errorHandler);