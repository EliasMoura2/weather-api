// import { Router } from 'express';

// import locationRoutes from './location/infrastructure/routes';
// import weatherRoutes from './weather/infrastructure/routes';

// const routes = Router();

// routes.use('/location', locationRoutes);
// routes.use('/weathers', weatherRoutes);

// export default routes;

import { Router } from "express";
import { LocationRoutes } from "./location/infrastructure/routes";
import { WeatherRoutes } from "./weather/infrastructure/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/location", LocationRoutes.routes);
    router.use('/weathers', WeatherRoutes.routes);

    return router;
  }
}

