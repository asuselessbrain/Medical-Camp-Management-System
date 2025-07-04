import LoginPage from "@/pages/login/Login";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    }
])