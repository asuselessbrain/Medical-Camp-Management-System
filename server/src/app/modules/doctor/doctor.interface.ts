import { Types } from "mongoose";

export interface IDoctor {
    _id?: string;
    userId: Types.ObjectId;
    fullName: string;
    phoneNumber: string;
    gender: 'male' | 'female' | 'others';
    dob: Date;
    profileImg: string;
    address: string;
    medicalRegNo: string;
    specialization: string;
    yearOfExperience: string;
    currentHospitalOrClinic: string;
    degrees: [string];
    medicalLicenceDocuments: [string]
}