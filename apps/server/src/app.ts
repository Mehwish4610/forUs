import cors from "cors";
import express from "express";
import helmet from "helmet";
import { requestLogger } from "./middleware/requestLogger.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import routes from "./routes/index.js";

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestLogger);

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