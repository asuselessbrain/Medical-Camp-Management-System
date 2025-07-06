import mongoose from "mongoose";
import { IPatient } from "../patient/patient.interface"
import { IUser } from "./user.interface"
import { User } from "./user.model";
import { Patient } from "../patient/patient.model";
import { IDoctor } from "../doctor/doctor.interface";
import { Doctor } from "../doctor/doctor.model";

const createUserInDB = async (userData: Partial<IUser>, patientData: Partial<IPatient>) => {

    userData.role = 'patient'


    const session = await mongoose.startSession()
    try {
        session.startTransaction()

        const newUser = new User(userData)
        const savedUser = await newUser.save({ session });

        const newPatient = new Patient({
            ...patientData,
            userId: savedUser._id
        });

        const savedPatient = await newPatient.save({ session });

        await session.commitTransaction();
        await session.endSession();


        return savedPatient

    } catch (error) {
        await session.abortTransaction();
        await session.endSession()
        throw new Error((error as Error).message)
    }

}

const createDoctorInDB = async (userInfo: Partial<IUser>, doctorInfo: Partial<IDoctor>) => {
    userInfo.role = 'doctor';

    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        const newUser = new User(userInfo);
        const userData = await newUser.save({ session })

        const updatedDoctorInfo = {
            ...doctorInfo,
            useId: userData._id
        }

        const newDoctor = new Doctor(updatedDoctorInfo);
        const doctorData = await newDoctor.save({ session })

        await session.commitTransaction();
        await session.endSession();

        return doctorData

    }catch(err){
       await session.abortTransaction();
       await session.endSession()
       throw new Error((err as Error).message)
    }
}

export const userServices = {
    createUserInDB,
    createDoctorInDB
}