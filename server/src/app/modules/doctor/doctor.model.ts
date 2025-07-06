import { model, Schema } from "mongoose";
import { IDoctor } from "./doctor.interface";

const doctorSchema = new Schema<IDoctor>({
    userId: {
        type: Schema.Types.ObjectId,
        required: [true, "User id is required"],
        ref: 'User',
        unique: true
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

        const isDoctorExistInRegistrationNo = await Doctor.findOne({ medicalRegNo: doctor.medicalRegNo })

        if (isDoctorExistInRegistrationNo) {
            throw new Error('Doctor already registered using this medical registration number')
        }

    }
    next()
})

export const Doctor = model('doctor', doctorSchema)