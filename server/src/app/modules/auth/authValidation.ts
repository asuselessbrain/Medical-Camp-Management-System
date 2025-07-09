import z from "zod";

export const loginValidation = z.object({
    email: z.string({required_error: "Email is required!"}).regex(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            { message: "Invalid email format" }),
    password: z.string({required_error: "Password is required"})
})