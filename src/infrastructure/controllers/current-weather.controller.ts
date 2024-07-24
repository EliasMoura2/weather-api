import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { CurrentWeatherFinderUseCase } from "../../application/current-weather-finder.usecase";

@injectable()
export class CurrentWeathercontroller {

  constructor(
    @inject(CurrentWeatherFinderUseCase) 
    private readonly currentWeatherFinderUsecase: CurrentWeatherFinderUseCase
  ) {}

  find = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const city = req.query.city as string;

      const weather = await this.currentWeatherFinderUsecase.find(city);

      return res.status(200).json({ weather });
    } catch (error) {
      next(error);
    }
  }
}