import { StatusCodes } from "http-status-codes"
import { AppError } from "../../error/appError"
import { ILogin } from "../../types/types"
import { User } from "../user/user.model"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from "../../../config"

const login = async (payload: ILogin) => {
    const isUserExist = await User.findOne({ email: payload?.email }).select('+password')

    if (!isUserExist) {
        throw new AppError(StatusCodes.NOT_FOUND, "User does not exist")
    }

    const isPasswordMatched = await bcrypt.compare(payload?.password, isUserExist?.password)

    if (!isPasswordMatched) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Wrong email or password!")
    }

    const verificationStatus = isUserExist?.verificationStatus;

    if(!verificationStatus){
        throw new AppError(StatusCodes.FORBIDDEN, 'Your account is not verified. Please verify your email.');
    }

    const userStatus = isUserExist?.userStatus;

    if(userStatus === 'pending'){
        throw new AppError(StatusCodes.FORBIDDEN, "Please wait for admin aproval!")
    }
    if(userStatus === 'rejected'){
        throw new AppError(StatusCodes.FORBIDDEN, "User join requist was rejected!")
    }

    const jwtPayload = {
        email: isUserExist?.email,
        role: isUserExist?.role
    }

    const token = jwt.sign({
        jwtPayload
    }, config?.jwt?.jwt_token as string, { expiresIn: '7d' });

    return {
        token: token
    };
}

export const authServices = {
    login,
}