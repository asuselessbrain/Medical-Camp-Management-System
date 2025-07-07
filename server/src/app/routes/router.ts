import { Router } from "express";
import userRoute from "../modules/user/user.router";

const router = Router();
const routers = [
    {
        path: '/user',
        route: userRoute
    }
]

routers.map(route=> router.use(route.path, route.route))



export default router;