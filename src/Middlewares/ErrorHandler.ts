// src/Middlewares/ErrorHandler.ts

import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(
    error: Error,
    _request: Request,
    response: Response,
    next: NextFunction,
  ) {
    response
      .status(500)
      .json({ message: error.message });
  
    next();
  }
}

export default ErrorHandler;
