export class CustomError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
  ) {
    super(message);
  }
}

export class BadRequestError extends CustomError {
  constructor(message: string) {
    super(400, message);
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message: string) {
    super(401, message);
  }
}

export class ForbiddenError extends CustomError {
  constructor(message: string) {
    super(403, message);
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string) {
    super(404, message);
  }
}

export class ConflictError extends CustomError {
  constructor(message: string) {
    super(409, message);
  }
}

export class InternalServerError extends CustomError {
  constructor(message: string) {
    super(500, message);
  }
}
