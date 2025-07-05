import { Router } from "express";
import { userControllers } from "./user.controller";

const userRoute = Router()

userRoute.post('/create-patient', userControllers.createUser);

export default userRoute;