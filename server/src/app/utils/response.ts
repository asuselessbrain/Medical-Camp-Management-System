import { Response } from "express"

export const sendResponse = <T>(res: Response, statusCode: number, message: string, data: T | T[] | null) => {
    res.status(statusCode).json({
        success: true,
        message,
        data: data
    })
}