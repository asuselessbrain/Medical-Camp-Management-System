import { Router } from "express";
import userRoute from "../modules/user/user.router";
import authRoute from "../modules/auth/auth.router";

const router = Router();
const routers = [
    {
        path: '/user',
        route: userRoute
    },
    {
        path: '/auth',
        route: authRoute
    }
]

routers.map(route=> router.use(route.path, route?.route))



export default router;