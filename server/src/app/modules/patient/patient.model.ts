import { model, Schema } from "mongoose";
import { IPatient } from "./patient.interface";
import { User } from "../user/user.model";

const patientSchema = new Schema<IPatient>({
    userId: {
        type: Schema.Types.ObjectId,
        required: [true, "User id is required"],
        ref: 'User',
    },
    fullName: {
        type: String,
        required: [true, "Full Name is required"],
        maxlength: [50, 'Name must be between 3 to 50 characters'],
        minlength: [3, "Name must must be between 3 to 50 characters"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone Number is required"],
        unique: [true, 'The phone number already exist'],
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'others'],
            message: "Gender `{VALUE}` is not valid"
        },
        required: [true, "Gender is required"]
    },
    dob: {
        type: Date,
        required: [true, "Date of birth is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    }
},
    {
        timestamps: true
    })

patientSchema.pre('save', async function (next) {

    const isUserExist = await User.findById(this.userId)

    if (!isUserExist) {
        throw new Error("User does not exist")
    }

    if (this.isNew) {
        const isPhoneNumberExist = await Patient.findOne({ phoneNumber: this.phoneNumber })

        if (isPhoneNumberExist) {
            throw new Error("Patient already registered using this phone number")
        }
    }

    next()
})

export const Patient = model('patient', patientSchema)