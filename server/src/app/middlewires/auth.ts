import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/appError";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../../config";
import { CatchAsync } from "../utils/catchAsync";
import { User } from "../modules/user/user.model";
import { TUserRole } from "../modules/user/user.interface";


export const auth = (...verificationRoles: TUserRole[]) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "Unauthorized access!");
    }

    try {
      const decoded = jwt.verify(token, config.jwt.jwt_token as string) as JwtPayload;

      const user = await User.findOne({ email: decoded.email });
      if (!user) {
        throw new AppError(StatusCodes.NOT_FOUND, "User does not exist!");
      }

      if (!user.verificationStatus) {
        throw new AppError(StatusCodes.FORBIDDEN, "You are not verified!");
      }

      if (user.userStatus === 'pending') {
        throw new AppError(StatusCodes.FORBIDDEN, "Please wait for admin approval!");
      }

      if (user.userStatus === 'rejected') {
        throw new AppError(StatusCodes.FORBIDDEN, "You are blocked and cannot join the site!");
      }

      req.user = decoded;

      if (verificationRoles.length && !verificationRoles.includes(decoded.role)) {
        throw new AppError(StatusCodes.FORBIDDEN, "You are not authorized for this content!");
      }
      next();
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Token has expired!");
      }
      if (err instanceof jwt.JsonWebTokenError) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Invalid token!");
      }

      throw new AppError(StatusCodes.UNAUTHORIZED, "Unauthorized access!");
    }
  });
};
