import { z } from "zod"

const loginValidation = z.object({
    email: z.string({ required_error: "Email is required" })
    .email("Invalid Email"),
    password: z.string({required_error: "Password is required"})
    .min(8, "Password must be between 8 to 50 characters")
    .max(50, "Password must be between 8 to 50 characters")
})

export default loginValidation;