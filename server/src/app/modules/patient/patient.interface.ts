import { Types } from "mongoose";

export interface IPatient {
    _id?: string;
    userId: Types.ObjectId;
    fullName: string;
    phoneNumber: string;
    gender: 'male' | 'female' | 'others';
    dob: Date;
    address: string;
}