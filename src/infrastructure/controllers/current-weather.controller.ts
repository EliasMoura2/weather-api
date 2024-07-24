import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { CurrentWeatherFinderUseCase } from "../../application/current-weather-finder.usecase";
import { ICurrentWeatherFinderUseCase } from "../../domain";

@injectable()
export class CurrentWeathercontroller {
  constructor(
    @inject(CurrentWeatherFinderUseCase)
    private readonly currentWeatherFinderUsecase: ICurrentWeatherFinderUseCase
  ) {}

  find = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.log.info("Getting current weather");
      const city = req.query.city as string;

      const weather = await this.currentWeatherFinderUsecase.find(city);

      req.log.debug({ weather }, "Current weather found");
      return res.status(200).json({ weather });
    } catch (error) {
      next(error);
    }
  };
}
