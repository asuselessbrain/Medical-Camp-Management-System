import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export const validateRequest = (Schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try{
            Schema.parse(req.body);
            next();
        }catch(err: any){
            next(err)
        }
    }
}