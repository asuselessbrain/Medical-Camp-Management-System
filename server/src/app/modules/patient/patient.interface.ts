import { Types } from "mongoose";

export interface IPatient {
    _id?: string;
    userId: Types.ObjectId;
}