import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { LocationFinderUseCase } from "../../application/location-finder.usecase";
import { ILocationFinderUseCase } from "../../domain/use-cases/location-finder.usecase";

@injectable()
export class LocationFinderController {
  constructor(
    @inject(LocationFinderUseCase)
    private readonly useCase: ILocationFinderUseCase
  ) {}

  find = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const location = await this.useCase.find();

      return res.status(200).json({ location });
    } catch (error) {
      next(error);
    }
  };
}
