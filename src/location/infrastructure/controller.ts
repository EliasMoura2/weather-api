
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { FindLocationUsecase } from "../domain";
import { FindLocationUseCase } from "../application/find-location.usecase";

@injectable()
export class LocationFinderController {
  constructor(
    @inject(FindLocationUseCase)
    private readonly findLocation: FindLocationUsecase
  ) {}

  find = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const location = await this.findLocation.find();

      return res.status(200).json({ location });
    } catch (error) {
      console.log("--Location Controller--", error);
      next(error);
    }
  };
}
