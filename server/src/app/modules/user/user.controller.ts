import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, fullName, phoneNumber, gender, dob, address } = req.body
    const userData = { email, password };
    const patientData = { fullName, phoneNumber, gender, dob, address }
    try{
        const createUser = await userServices.createUserInDB(userData, patientData);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: createUser
        })
    }
    catch(err){
        next(err)
    }
}

export const userControllers = {
    createUser
}