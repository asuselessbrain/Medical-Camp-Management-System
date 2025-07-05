import { Router } from "express";
import { userControllers } from "./user.controller";
import { zodPatientValidation } from "../patient/patientValidation";
import { validateRequest } from "../../middlewires/validateRequist";

const userRoute = Router()

userRoute.post('/create-patient', validateRequest(zodPatientValidation.patientValidation), userControllers.createUser);

export default userRoute;