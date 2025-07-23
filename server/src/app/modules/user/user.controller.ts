import { Request, Response } from "express";
import { userServices } from "./user.service";
import { CatchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/response";
import { StatusCodes } from "http-status-codes";

// create patient
const createPatient = CatchAsync(async (req: Request, res: Response) => {
    const { email, password, fullName, phoneNumber, gender, dob, address } = req.body
    const userData = { email, password };
    const patientData = {fullName, phoneNumber, gender, dob, address}
    const createPatient = await userServices.createPatientInDB(userData, patientData);
    sendResponse(res, StatusCodes.CREATED, "Patient created Successfully", createPatient)
})

// get all patient
const getAllPatient = CatchAsync(async(req: Request, res: Response) => {
    const result = await userServices.allPatientsFromDB();
    sendResponse(res, StatusCodes.OK, "Patient retrive succefully", result);
})

// create doctor
const createDoctor = CatchAsync(async (req: Request, res: Response) => {
    const { email, password, fullName, phoneNumber, gender, dob, profileImg, address, medicalRegNo, specialization, yearOfExperience, currentHospitalOrClinic, degrees, medicalLicenceDocuments } = req.body;

    const userInfo = { email, password, fullName, phoneNumber, gender, dob, address };
    const doctorInfo = { profileImg, medicalRegNo, specialization, yearOfExperience, currentHospitalOrClinic, degrees, medicalLicenceDocuments }

    const result = await userServices.createDoctorInDB(userInfo, doctorInfo)

    sendResponse(res, StatusCodes.CREATED, "Doctor created Successfully", result)

})

// get all doctor
const getAllDoctor = CatchAsync(async(req: Request, res: Response) => {
    const result = await userServices.allDoctorsFromDB();
    sendResponse(res, StatusCodes.OK, "Doctors retrive succefully", result);
})

export const userControllers = {
    createPatient,
    createDoctor,
    getAllPatient,
    getAllDoctor
}