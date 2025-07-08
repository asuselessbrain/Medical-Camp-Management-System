import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../../config";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../../error/appError";

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
    password: {
        type: String,
        maxlength: [50, "Password must be between 8 to 50 characters"],
        minlength: [8, "Password must be between 8 to 50 characters"],
        required: [true, "Password is required"]
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


userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isNew) {
        const userIsExist = await User.findOne({ email: user?.email })
        if (userIsExist) {
            throw new AppError(StatusCodes.CONFLICT,"User with this email already exists")
        }
    }
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, Number(config.salt_rounds));
    }


    next()
})


userSchema.post('save', function (doc, next) {
    doc.password = "";
    next();
})

export const User = model('user', userSchema);