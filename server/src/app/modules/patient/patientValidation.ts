import z from "zod";


const patientValidation = z.object({
    email: z.string()
        .regex(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            { message: "Invalid email format" }
        ),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(50, { message: "Password must be at most 50 characters" })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/,
            {
                message:
                    "Password must contain at least one uppercase letter, one lowercase letter, and one special character",
            }
        ),

    fullName: z.string()
        .min(3, { message: "Name must be between 3 to 50 characters" })
        .max(50, { message: "Name must be between 3 to 50 characters" })
        .regex(/^[^\p{Emoji}\p{Emoji_Presentation}]+$/u, {
            message: "Name cannot contain emojis"
        }),

    phoneNumber: z.string()
        .regex(/^01[3-9][0-9]{8}$/, {
            message: "Phone number must be a valid Bangladeshi number (e.g., 017xxxxxxxx)",
        }),
    gender: z.enum(['male', 'female', 'others'], { message: "Gender must be male, female or others" }),
    dob: z.string(),
    address: z.string()
})

export const zodPatientValidation = {
    patientValidation
}