import { RegistrationForm, type Field } from "@/components/registration-form";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import patientRegistrationValidation from "./validation";


const PatientRegistration = () => {

    const formFields: Field[] = [
        {
            name: "fullName",
            label: "Full Name",
            type: "text",
        },
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
        {
            name: "phoneNumber",
            label: "Phone Number",
            type: "text",
        },
        {
            name: "gender",
            label: "Gender",
            type: "select",
            options: [
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
            ],
        },
        {
            name: "dob",
            label: "Date Of Birth",
            type: "date",
        },
    ]

    const handleSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-5xl">
                <RegistrationForm formFields={formFields} schema={patientRegistrationValidation} onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default PatientRegistration;