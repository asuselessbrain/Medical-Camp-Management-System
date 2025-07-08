import { Router } from "express";
import { userControllers } from "./user.controller";
import { zodPatientValidation } from "../patient/patientValidation";
import { validateRequest } from "../../middlewires/validateRequist";
import { doctorValidationSchema } from "../doctor/doctorValidation";

const userRoute = Router()

userRoute.post('/create-patient', validateRequest(zodPatientValidation.patientValidation), userControllers.createUser);
userRoute.post('/create-doctor', validateRequest(doctorValidationSchema), userControllers.createDoctor);

export default userRoute;