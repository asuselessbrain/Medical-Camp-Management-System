import { Router } from "express";
import { userControllers } from "./user.controller";
import { zodPatientValidation } from "../patient/patientValidation";
import { validateRequest } from "../../middlewires/validateRequist";
import { doctorValidationSchema } from "../doctor/doctorValidation";
import { auth } from "../../middlewires/auth";

const userRoute = Router()

// create patient
userRoute.post('/create-patient', validateRequest(zodPatientValidation.patientValidation), userControllers.createPatient);
// create doctor
userRoute.post('/create-doctor', validateRequest(doctorValidationSchema), userControllers.createDoctor);
// get all patients
userRoute.get('/patients', auth(), userControllers.getAllPatient)
// get all doctor
userRoute.get('/doctors', userControllers.getAllDoctor)

export default userRoute;