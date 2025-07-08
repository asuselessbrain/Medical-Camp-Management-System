import { Request, Response } from "express";
import { CatchAsync } from "../../utils/catchAsync";
import { authServices } from "./auth.service";
import { sendResponse } from "../../utils/response";
import { StatusCodes } from "http-status-codes";

const login = CatchAsync(async(req: Request, res: Response)=>{
    const result = await authServices.login(req?.body)
    sendResponse(res, StatusCodes.OK, "User logged in successfully!", result)
})

export const authControler = {
    login
}