import { NextFunction, Request, Response } from "express";

class CustomError extends Error{
    statusCode: number;
    constructor(message: string, statusCode: number){
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}

export const globalErrorHandlear = (error: CustomError, req: Request, res: Response, next: NextFunction)=>{
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Something went wrong'
  res.status(statusCode).json({
    success: false,
    message: message,
    error: error
  })
}