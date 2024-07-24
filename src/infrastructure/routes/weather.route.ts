import { Router } from "express";
import { container } from "tsyringe";

import { CurrentWeathercontroller } from "../controllers/current-weather.controller";
import { ForecastWeathercontroller } from "../controllers/forecast-weather.controller";

export class WeatherRoutes {
  static get routes(): Router {
    const router = Router();

    const currentWeatherController = container.resolve(
      CurrentWeathercontroller
    );
    const forecastWeatherController = container.resolve(
      ForecastWeathercontroller
    );

    /**
     * @openapi
     * /weathers/current:
     *  get:
     *    summary: Get current weather
     *    description: Get current weather
     *    tags: [ weather ]
     *    parameters:
     *      - in: query
     *        name: city
     *        required: false
     *        schema:
     *          type: string
     *          example: Buenos Aires
     *    responses:
     *      200:
     *        description: Get weather
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                weather:
     *                  $ref: '#/components/schemas/CurrentWeather'
     */
    router.get("/current", currentWeatherController.find);

    /**
     * @openapi
     * /weathers/forecast:
     *  get:
     *    summary: Get forecast weather
     *    description: Get weather for 5 days
     *    tags: [ weather ]
     *    parameters:
     *      - in: query
     *        name: city
     *        required: false
     *        schema:
     *          type: string
     *          example: Buenos Aires
     *    responses:
     *      200:
     *        description: Get forecast weather
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                forecastWeather:
     *                  $ref: '#/components/schemas/ForecastWeather'
     *                    
     */
    router.get("/forecast", forecastWeatherController.find);

    return router;
  }
}
