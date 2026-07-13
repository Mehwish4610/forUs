import cors from "cors";
import express from "express";
import helmet from "helmet";
import { requestLogger } from "./middleware/requestLogger.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import routes from "./routes/index.js";
import cookieParser from "cookie-parser";

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

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    app: "forUs server",
    timestamp: new Date().toISOString(),
  });
});

app.use(notFound);
app.use(errorHandler);