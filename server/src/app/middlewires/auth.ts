import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/appError";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../../config";
import { CatchAsync } from "../utils/catchAsync";
import { User } from "../modules/user/user.model";

export const auth = () => {
    return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req?.headers?.authorization;

        if (!token) {
            throw new AppError(StatusCodes.UNAUTHORIZED, "Unauthorized access!")
        }

        let decoded;

        try {
            decoded = jwt.verify(token, config?.jwt?.jwt_token as string) as JwtPayload;
        } catch (err) {
            throw new AppError(StatusCodes.UNAUTHORIZED, "Unauthorized access! from catch")
        }

        const user = await User.findOne({email: decoded?.email})

        if(!user){
            throw new AppError(StatusCodes.NOT_FOUND, "User does not exist!")
        }

        if(!user?.verificationStatus){
            throw new AppError(StatusCodes.FORBIDDEN, "You are not verified!")
        }

        if(user?.userStatus === 'pending'){
            throw new AppError(StatusCodes.FORBIDDEN, "Please wait for admin approval!")
        }

        if(user?.userStatus === 'rejected'){
            throw new AppError(StatusCodes.FORBIDDEN, "You are blocked can not access the content!")
        }

        console.log(decoded)
        next()
    })
}