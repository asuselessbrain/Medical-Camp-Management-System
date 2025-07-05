import { IPatient } from "../patient/patient.interface"
import { IUser } from "./user.interface"

const createUserInDB = async (userData: Partial<IUser>, patientDate: Partial<IPatient>) => {
    userData.role = 'patient';
    console.log(userData)
    console.log(patientDate)
}

export const userServices = {
    createUserInDB
}