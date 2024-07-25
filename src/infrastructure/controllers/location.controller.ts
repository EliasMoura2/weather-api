import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import {
  ILocationFinderUseCase,
  LOCATION_FINDER_USECASE,
  StatusCodes,
} from '../../domain';

@injectable()
export class LocationFinderController {
  constructor(
    @inject(LOCATION_FINDER_USECASE)
    private readonly useCase: ILocationFinderUseCase
  ) {}

  find = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.log.info('Getting location');
      const location = await this.useCase.find();

      req.log.debug({ location }, 'Location found');
      return res.status(StatusCodes.OK).json({ location });
    } catch (error) {
      next(error);
    }
  };
}
