import { userRole } from "./userContant";

export interface IUser{
    _id?: string;
    email: string;
    password: string;
    role: 'patient' | 'doctor' | 'organizer' | 'volunteer';
    verificationStatus: boolean;
    userStatus: 'approved' | 'pending' | 'rejected';
}

export type TUserRole = keyof typeof userRole;
