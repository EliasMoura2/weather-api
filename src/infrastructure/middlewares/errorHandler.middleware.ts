/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { CustomError } from '../../domain/errors';
import { AxiosError } from 'axios';
import { ReasonPhrases, StatusCodes } from '../../domain';

export const errorHandler = (err: any, req: Request, res: Response) => {
  if (err instanceof CustomError) {
    req.log.error(err);

    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  if (err instanceof AxiosError) {
    req.log.error(err);

    return res
      .status(err.response?.status ?? StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: err.response?.data.message ?? err.message });
  }

  const statusCode = err.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.data ?? err.message ?? ReasonPhrases.INTERNAL_SERVER_ERROR;

  req.log.error(err);

  return res.status(statusCode).json({ error: message });
};
