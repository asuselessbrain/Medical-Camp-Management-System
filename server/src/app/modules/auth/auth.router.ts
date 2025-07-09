import { Router } from "express";
import { authControler } from "./auth.controller";
import { validateRequest } from "../../middlewires/validateRequist";
import { loginValidation } from "./authValidation";

const authRoute = Router()

authRoute.post('/login', validateRequest(loginValidation), authControler.login)

export default authRoute;