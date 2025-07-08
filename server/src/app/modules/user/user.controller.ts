import { Request, response, Response } from "express";
import { userServices } from "./user.service";
import { CatchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/response";
import { StatusCodes } from "http-status-codes";

const createPatient = CatchAsync(async (req: Request, res: Response) => {
    const { email, password, fullName, phoneNumber, gender, dob, address } = req.body
    const userData = { email, password, fullName, phoneNumber, gender, dob, address };
    const patientData = {}
    const createPatient = await userServices.createPatientInDB(userData, patientData);
    sendResponse(res, StatusCodes.CREATED, "Patient created Successfully", createPatient)
})

const getAllPatient = CatchAsync(async(req: Request, res: Response) => {
    const result = await userServices.allPatientsFromDB();
    sendResponse(res, StatusCodes.OK, "Patient retrive succefully", result);
})


const createDoctor = CatchAsync(async (req: Request, res: Response) => {
    const { email, password, fullName, phoneNumber, gender, dob, profileImg, address, medicalRegNo, specialization, yearOfExperience, currentHospitalOrClinic, degrees, medicalLicenceDocuments } = req.body;

    const userInfo = { email, password, fullName, phoneNumber, gender, dob, address };
    const doctorInfo = { profileImg, medicalRegNo, specialization, yearOfExperience, currentHospitalOrClinic, degrees, medicalLicenceDocuments }

    const result = await userServices.createDoctorInDB(userInfo, doctorInfo)

    sendResponse(res, StatusCodes.CREATED, "Doctor created Successfully", result)

})

export const userControllers = {
    createPatient,
    createDoctor
}