import { Request, Response } from "express";
import { userServices } from "./user.service";
import { CatchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/response";

const createUser = CatchAsync(async (req: Request, res: Response) => {
    const { email, password, fullName, phoneNumber, gender, dob, address } = req.body
    const userData = { email, password, fullName, phoneNumber, gender, dob, address };
    const patientData = {}
    const createUser = await userServices.createUserInDB(userData, patientData);
    sendResponse(res, 201, "Patient created Successfully", createUser)
})

const createDoctor = CatchAsync(async (req: Request, res: Response) => {
    const { email, password, fullName, phoneNumber, gender, dob, profileImg, address, medicalRegNo, specialization, yearOfExperience, currentHospitalOrClinic, degrees, medicalLicenceDocuments } = req.body;

    const userInfo = { email, password, fullName, phoneNumber, gender, dob, address };
    const doctorInfo = { profileImg, medicalRegNo, specialization, yearOfExperience, currentHospitalOrClinic, degrees, medicalLicenceDocuments }

    const result = await userServices.createDoctorInDB(userInfo, doctorInfo)

    sendResponse(res, 201, "Doctor created Successfully", result)

})

export const userControllers = {
    createUser,
    createDoctor
}