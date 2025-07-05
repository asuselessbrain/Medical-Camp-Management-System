import z from "zod";


const userValidation = z.object({
    email: z.string()
        .email()
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
    role: z.
        enum(['patient', 'doctor', 'organizer', 'volunteer'],
            { message: "Role must be one of: patient, doctor, organizer, or volunteer" }
        ),
    verificationStatus: z.
        boolean().
        default(true),
    userStatus: z.
        enum(['approved', 'pending', 'rejected'],
            { message: "Role must be one of: approved, pending, rejected" }
        ),
})

export const zodUserValidation = {
    userValidation
}