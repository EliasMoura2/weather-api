import express, { Router } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import swaggerUI from "swagger-ui-express";
import OpenApiConfig from "./shared/docs/swagger";

interface Options {
  port?: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  private serverListener?: any;
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port = 4000, routes } = options;

    this.port = port;
    this.routes = routes;
  }

  async start() {
    // Middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());

    process.env.NODE_ENV !== "prod"
      ? this.app.use(morgan("dev"))
      : this.app.use(morgan("tiny"));

    // Routes
    this.app.use("/api/v1", this.routes);
    this.app.use("/docs", swaggerUI.serve, swaggerUI.setup(OpenApiConfig));

    // Start server
    this.serverListener = this.app.listen(this.port, () =>
      console.log(`Server running on port ${this.port}`)
    );
  }

  public close() {
    this.serverListener?.close();
  }
}
