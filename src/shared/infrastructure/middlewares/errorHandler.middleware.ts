import { Request, Response } from "express";
import { CustomError } from "../../domain/errors";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    error: "Internal server error",
  });
};
