import { Router } from "express";
import { LocationRoutes } from "./infrastructure/routes/location.route";
import { WeatherRoutes } from "./infrastructure/routes/weather.route";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/location", LocationRoutes.routes);
    router.use("/weathers", WeatherRoutes.routes);

    return router;
  }
}
