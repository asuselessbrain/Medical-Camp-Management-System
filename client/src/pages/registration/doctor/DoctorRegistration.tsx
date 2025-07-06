import { RegistrationForm, type Field } from "@/components/registration-form"
import type { FieldValues, SubmitHandler } from "react-hook-form"
import { doctorValidationSchema } from "./Validation"

const DoctorRegistration = () => {

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
        // TODO: Make file
        {
            name: "profileImg",
            label: "Profile Image",
            type: "text",
            placehonder: "Profile Image"
        },
        {
            name: "medicalRegNo",
            label: "Medical Registration No",
            type: "text",
            placehonder: "Medical Registration No"
        },
        {
            name: "specialization",
            label: "Specialization",
            type: "select",
            placehonder: "Select Specilization",
            options: [
                { label: "Cardiology", value: "Cardiology" },
                { label: "Neurology", value: "Neurology" },
                { label: "Dermatology", value: "Dermatology" },
                { label: "Pediatrics", value: "Pediatrics" },
                { label: "Orthopedics", value: "Orthopedics" }
            ],
        },
        {
            name: "yearOfExperience",
            label: "Year Of Experience",
            type: "text",
            placehonder: "Year Of Experience"
        },
        {
            name: "currentHospitalOrClinic",
            label: "Current Hospital Or Clinic",
            type: "text",
            placehonder: "Current Hospital Or Clinic"
        },
        {
            name: "degrees",
            label: "Degrees",
            type: "text",
            placehonder: "Degrees"
        },
        {
            name: "medicalLicenceDocuments",
            label: "Medical Licence Documents",
            type: "text",
            placehonder: "Medical Licence Documents"
        },
    ]

    const handleSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-7xl">
                <RegistrationForm formFields={formFields} schema={doctorValidationSchema} onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default DoctorRegistration