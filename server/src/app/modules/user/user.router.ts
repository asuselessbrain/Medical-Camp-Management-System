import { Router } from "express";

const userRoute = Router()

userRoute.post('/create-patient', userController.createUser);

export default userRoute;