import { z } from "zod"

const patientRegistrationValidation = z.object({
    fullName: z.string()
        .min(3, { message: "Name must be between 3 to 50 characters" })
        .max(50, { message: "Name must be between 3 to 50 characters" })
        .regex(/^[^\p{Emoji}\p{Emoji_Presentation}]+$/u, {
            message: "Name cannot contain emojis"
        }),
    email: z.string({ required_error: "Email is required" })
        .email("Invalid Email"),
    password: z.string({ required_error: "Password is required" })
        .min(8, "Password must be between 8 to 50 characters")
        .max(50, "Password must be between 8 to 50 characters"),
    confirmPassword: z.string({ required_error: "Password is required" })
        .min(8, "Password must be between 8 to 50 characters")
        .max(50, "Password must be between 8 to 50 characters"),
        phoneNumber: z.string()
        .regex(/^01[3-9][0-9]{8}$/, {
            message: "Phone number must be a valid Bangladeshi number (e.g., 017xxxxxxxx)",
        }),
    gender: z.enum(['male', 'female', 'others'], { message: "Gender must be male, female or others" }),
    dob: z.string(),
    address: z.string(),

})

export default patientRegistrationValidation;