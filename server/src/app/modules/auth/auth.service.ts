import { StatusCodes } from "http-status-codes"
import { AppError } from "../../error/appError"
import { ILogin } from "../../types/types"
import { User } from "../user/user.model"
import bcrypt from 'bcrypt'

const login = async(payload: ILogin)=>{
    const isUserExist = await User.findOne({email: payload?.email})

    if(!isUserExist){
        throw new AppError(StatusCodes.NOT_FOUND, "User does not exist")
    }

    const isPasswordMatched = await bcrypt.compare(payload?.password, isUserExist?.password)

    if(!isPasswordMatched){
        throw new AppError(StatusCodes.UNAUTHORIZED, "Wrong email or password!")
    }

    console.log("userLoged in successfully")
}

export const authServices = {
    login,
}