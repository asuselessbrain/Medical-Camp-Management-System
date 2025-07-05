import { Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
            'Please enter a valid email address',
        ],
    },
    role: {
        type: String,
        enum: {
            values: ['patient', 'doctor', 'organizer', 'volunteer'],
            message: 'Role `{VALUE}` is not valid'
        },
        required: [true, "Role is required"]
    },
    verificationStatus: {
        type: Boolean,
        default: true
    },
    userStatus: {
        type: String,
        enum: {
            values: ['approved', 'pending', 'rejected'],
            message: 'User status `{VALUE}` is not valid'
        },
        default: 'pending'
    }
},
{
    timestamps: true
})