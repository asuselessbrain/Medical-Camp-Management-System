export interface IPratient {
    _id?: string;
    userId: string;
    fullName: string;
    phoneNumber: string;
    gender: 'male' | 'female' | 'others';
    dob: Date;
    password: string;
    address: string 
}