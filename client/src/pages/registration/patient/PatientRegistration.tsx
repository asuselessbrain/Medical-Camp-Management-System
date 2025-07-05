import { RegistrationForm, type Field } from "@/components/registration-form";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import patientRegistrationValidation from "./validation";


const PatientRegistration = () => {

    const formFields: Field[] = [
        {
            name: "fullName",
            label: "Full Name",
            type: "text",
            placehonder: "Full Name"
        },
        {
            name: "email",
            label: "Email",
            type: "email",
            placehonder: "example@gmail.com"
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placehonder: "********"
        },
        {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            placehonder: "********"
        },
        {
            name: "phoneNumber",
            label: "Phone Number",
            type: "text",
            placehonder: "01700XXXXXX"
        },
        {
            name: "gender",
            label: "Gender",
            type: "select",
            placehonder: "Select Gender",
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
            placehonder: "Select Date Of Birth"
        },
        {
            name: "address",
            label: "Address",
            type: "text",
            placehonder: "Address"
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