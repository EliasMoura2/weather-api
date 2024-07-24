import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import {
  FORECAST_WEATHER_USECASE,
  IForecastWeatherUseCase,
  StatusCodes,
} from "../../domain";

@injectable()
export class ForecastWeatherController {
  constructor(
    @inject(FORECAST_WEATHER_USECASE)
    private readonly useCase: IForecastWeatherUseCase
  ) {}

  find = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.log.info("Getting forecast weather");
      const city = req.query.city as string;

      const forecastWeather = await this.useCase.find(city);

      req.log.debug({ forecastWeather }, "Forecast weather found");
      return res.status(StatusCodes.OK).json({ forecastWeather });
    } catch (error) {
      next(error);
    }
  };
}
