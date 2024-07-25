import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import {
  CURRENT_WEATHER_USECASE,
  ICurrentWeatherUseCase,
  StatusCodes,
} from '../../domain';

@injectable()
export class CurrentWeatherController {
  constructor(
    @inject(CURRENT_WEATHER_USECASE)
    private readonly currentWeatherFinderUsecase: ICurrentWeatherUseCase
  ) {}

  find = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.log.info('Getting current weather');
      const city = req.query.city as string;

      const weather = await this.currentWeatherFinderUsecase.find(city);

      req.log.debug({ weather }, 'Current weather found');
      return res.status(StatusCodes.OK).json({ weather });
    } catch (error) {
      next(error);
    }
  };
}
