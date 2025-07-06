export interface IUser{
    _id?: string;
    email: string;
    password: string;
    role: 'patient' | 'doctor' | 'organizer' | 'volunteer';
    fullName: string;
    phoneNumber: string;
    gender: 'male' | 'female' | 'others';
    dob: Date;
    address: string;
    verificationStatus: boolean;
    userStatus: 'approved' | 'pending' | 'rejected';
}