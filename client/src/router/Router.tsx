import LoginPage from "@/pages/login/Login";
import PatientRegistration from "@/pages/registration/patient/PatientRegistration";
import Registration from "@/pages/registration/Registration";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/registration",
        element: <Registration />

    },
    {
        path: "/registration/patient",
        element: <PatientRegistration />
    }
])