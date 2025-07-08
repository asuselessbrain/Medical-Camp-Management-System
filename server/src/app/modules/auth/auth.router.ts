import { Router } from "express";
import { authControler } from "./auth.controller";

const authRoute = Router()

authRoute.post('/login', authControler.login)

export default authRoute;