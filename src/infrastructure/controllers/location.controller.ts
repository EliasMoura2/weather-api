import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { LocationFinderUseCase } from "../../application/location-finder.usecase";
import { ILocationFinderUseCase, StatusCodes } from "../../domain";

@injectable()
export class LocationFinderController {
  constructor(
    @inject(LocationFinderUseCase)
    private readonly useCase: ILocationFinderUseCase
  ) {}

  find = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.log.info("Getting location");
      const location = await this.useCase.find();

      req.log.debug({ location }, "Location found");
      return res.status(StatusCodes.OK).json({ location });
    } catch (error) {
      next(error);
    }
  };
}
