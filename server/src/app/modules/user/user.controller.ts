import { Request, Response } from "express";
import { userServices } from "./user.service";
import { CatchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/response";

const createUser = CatchAsync(async (req: Request, res: Response) => {
    const { email, password, fullName, phoneNumber, gender, dob, address } = req.body
    const userData = { email, password };
    const patientData = { fullName, phoneNumber, gender, dob, address }
    const createUser = await userServices.createUserInDB(userData, patientData);
    sendResponse(res, 201, "User created Successfully", createUser)
})

export const userControllers = {
    createUser
}