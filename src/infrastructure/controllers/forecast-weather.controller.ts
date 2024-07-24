import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { ForecastWeatherFinderUseCase } from "../../application/forecast-weather-finder.usecase";

@injectable()
export class ForecastWeathercontroller {

  constructor(
    @inject(ForecastWeatherFinderUseCase)
    private readonly useCase: ForecastWeatherFinderUseCase
  ) {}

  find = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const city = req.query.city as string;

      const forecastWeather = await this.useCase.find(city);

      return res.status(200).json({ forecastWeather });
    } catch (error) {
      next(error);
    }
  }
}