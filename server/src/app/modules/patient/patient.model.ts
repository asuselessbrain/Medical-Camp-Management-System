import { model, Schema } from "mongoose";
import { IPatient } from "./patient.interface";
import { User } from "../user/user.model";

const patientSchema = new Schema<IPatient>({
    userId: {
        type: Schema.Types.ObjectId,
        required: [true, "User id is required"],
        ref: 'User',
        unique: true
    },
},
    {
        timestamps: true
    })


export const Patient = model('patient', patientSchema)