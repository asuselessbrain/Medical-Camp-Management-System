import { NextFunction, Request, Response } from "express";

const createUser = async(req: Request, res: Response, next:NextFunction) => {
    try{
        const createUser = await userServices.createUserInDB(req?.body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: createUser
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {}
        })
    }
}

export const userControllers = {
    createUser
}