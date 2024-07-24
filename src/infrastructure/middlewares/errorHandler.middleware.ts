import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../domain/errors";
import { AxiosError } from "axios";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    req.log.error(err);
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  if (err instanceof AxiosError) {
    req.log.error(err);
    return res
      .status(err.response?.status ?? 500)
      .json({ error: err.response?.data.message ?? err.message });
  }

  const statusCode = err.statusCode ?? 500;
  const message = err.data ?? err.message ?? "Internal server error";

  req.log.error(err);
  return res.status(statusCode).json({ error: message });
};
