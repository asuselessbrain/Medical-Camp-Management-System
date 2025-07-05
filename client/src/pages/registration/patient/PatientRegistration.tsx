import { RegistrationForm } from "@/components/registration-form";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import patientRegistrationValidation from "./validation";


const PatientRegistration = () => {

    const formFields = [
        {
            name: "email",
            label: "Email",
            type: "email",
        },
        {
            name: "password",
            label: "Password",
            type: "password",
        },
        {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
        },
    ]

    const handleSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <RegistrationForm formFields={formFields} schema={patientRegistrationValidation} onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default PatientRegistration;