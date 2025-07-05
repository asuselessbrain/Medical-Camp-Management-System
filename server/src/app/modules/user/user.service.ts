import mongoose from "mongoose";
import { IPatient } from "../patient/patient.interface"
import { IUser } from "./user.interface"
import { User } from "./user.model";
import { Patient } from "../patient/patient.model";

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

export const userServices = {
    createUserInDB
}