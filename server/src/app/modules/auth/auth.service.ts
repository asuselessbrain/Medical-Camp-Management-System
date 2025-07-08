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