import "reflect-metadata";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import pino from "pino-http";
import swaggerUI from "swagger-ui-express";
import OpenApiConfig from "./docs/swagger";
import { AppRoutes } from "./routes";
import { errorHandler } from "./infrastructure";

const server = express();

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(helmet());
server.use(compression());
server.use(pino());

process.env.NODE_ENV !== "prod"
  ? server.use(morgan("dev"))
  : server.use(morgan("tiny"));

// Docs
server.use("/docs", swaggerUI.serve, swaggerUI.setup(OpenApiConfig));

// Routes
server.use("/api/v1", AppRoutes.routes);

server.use(errorHandler);

export default server;
