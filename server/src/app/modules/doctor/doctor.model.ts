import { model, Schema } from "mongoose";
import { IDoctor } from "./doctor.interface";

const doctorSchema = new Schema<IDoctor>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User id is required"],
        unique: true
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
    },
    profileImg: {
        type: String,
        required: [true, "Profile Image is required"]
    },
    medicalRegNo: {
        type: String,
        required: [true, "Medical registration number is required"],
        unique: [true, "Medical Registration Number must be unique"]
    },
    specialization: {
        type: String,
        required: [true, "Specialization is required"]
    },
    yearOfExperience: {
        type: String,
        required: [true, "Year of experience is required"]
    },
    currentHospitalOrClinic: {
        type: String,
        required: [true, "Current Hospital or Clinic is required"]
    },
    degrees: {
        type: [String],
        required: [true, "Degrees are required"]
    },
    medicalLicenceDocuments: {
        type: [String],
        required: [true, "Medical Licence Documents are required"]
    }
})

doctorSchema.pre('save', async function (next) {
    const doctor = this;
    if (doctor.isNew) {
        const isDoctorExist = await Doctor.findOne({ phoneNumber: doctor.phoneNumber })
        if (isDoctorExist) {
            throw new Error('Doctor already registered using this phone number')
        }

        const isDoctorExistInRegistrationNo = await Doctor.findOne({ medicalRegNo: doctor.medicalRegNo })

        if (isDoctorExistInRegistrationNo) {
            throw new Error('Doctor already registered using this medical registration number')
        }

    }
    next()
})

export const Doctor = model('doctor', doctorSchema)