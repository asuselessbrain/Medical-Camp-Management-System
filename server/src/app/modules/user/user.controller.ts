import { Request, Response } from "express";
import { userServices } from "./user.service";
import { CatchAsync } from "../../utils/catchAsync";

const createUser = CatchAsync(async (req: Request, res: Response) => {
    const { email, password, fullName, phoneNumber, gender, dob, address } = req.body
    const userData = { email, password };
    const patientData = { fullName, phoneNumber, gender, dob, address }
    const createUser = await userServices.createUserInDB(userData, patientData);
    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: createUser
    })
})

export const userControllers = {
    createUser
}