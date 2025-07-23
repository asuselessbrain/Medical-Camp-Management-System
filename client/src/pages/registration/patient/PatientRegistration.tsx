
import { PatientRegistrationForm } from "@/components/patientRegistrationForm";


const PatientRegistration = () => {

    // const formFields: Field[] = [
    //     {
    //         name: "fullName",
    //         label: "Full Name",
    //         type: "text",
    //         placehonder: "Full Name"
    //     },
    //     {
    //         name: "email",
    //         label: "Email",
    //         type: "email",
    //         placehonder: "example@gmail.com"
    //     },
    //     {
    //         name: "password",
    //         label: "Password",
    //         type: "password",
    //         placehonder: "********"
    //     },
    //     {
    //         name: "confirmPassword",
    //         label: "Confirm Password",
    //         type: "password",
    //         placehonder: "********"
    //     },
    //     {
    //         name: "phoneNumber",
    //         label: "Phone Number",
    //         type: "text",
    //         placehonder: "01700XXXXXX"
    //     },
    //     {
    //         name: "gender",
    //         label: "Gender",
    //         type: "select",
    //         placehonder: "Select Gender",
    //         options: [
    //             { label: "Male", value: "male" },
    //             { label: "Female", value: "female" },
    //             { label: "Other", value: "other" },
    //         ],
    //     },
    //     {
    //         name: "dob",
    //         label: "Date Of Birth",
    //         type: "date",
    //         placehonder: "Select Date Of Birth"
    //     },
    //     {
    //         name: "address",
    //         label: "Address",
    //         type: "text",
    //         placehonder: "Address"
    //     },
    // ]


    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-5xl">
                <PatientRegistrationForm />
            </div>
        </div>
    )
}

export default PatientRegistration;