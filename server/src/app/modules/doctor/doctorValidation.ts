import { z } from "zod";

export const doctorValidationSchema = z.object({
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
    fullName: z
        .string({
            required_error: "Full Name is required",
        })
        .min(3, "Name must be between 3 to 50 characters")
        .max(50, "Name must be between 3 to 50 characters")
        .regex(/^[^\p{Emoji}\p{Emoji_Presentation}]+$/u, {
            message: "Name cannot contain emojis"
        }),

    phoneNumber: z
        .string({
            required_error: "Phone Number is required",
        }),

    gender: z.enum(["male", "female", "others"], {
        required_error: "Gender is required",
        invalid_type_error: "Gender must be 'male', 'female', or 'others'",
    }),

    dob: z.coerce.date({
        required_error: "Date of birth is required",
    }),

    address: z
        .string({
            required_error: "Address is required",
        }),

    profileImg: z
        .string({
            required_error: "Profile Image is required",
        }),

    medicalRegNo: z
        .string({
            required_error: "Medical registration number is required",
        }),

    specialization: z
        .string({
            required_error: "Specialization is required",
        }),

    yearOfExperience: z
        .string({
            required_error: "Year of experience is required",
        }),

    currentHospitalOrClinic: z
        .string({
            required_error: "Current Hospital or Clinic is required",
        }),

    degrees: z
        .array(z.string(), {
            required_error: "Degrees are required",
        })
        .min(1, "At least one degree is required"),

    medicalLicenceDocuments: z
        .array(z.string(), {
            required_error: "Medical Licence Documents are required",
        })
        .min(1, "At least one medical licence document is required"),
});
