import { Types } from "mongoose";

export interface IDoctor {
    _id?: string;
    userId: Types.ObjectId;
    profileImg: string;
    medicalRegNo: string;
    specialization: string;
    yearOfExperience: string;
    currentHospitalOrClinic: string;
    degrees: [string];
    medicalLicenceDocuments: [string]
}