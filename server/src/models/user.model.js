import mongoose from "mongoose"

const { Schema, model } = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 20
    },
    dob: {
        type: Date,
        required: true,
        min: new Date("1900-01-01"),
        max: Date.now,
    }
}, { timestamps: true })

const UserModel = model("User", userSchema)

export default UserModel