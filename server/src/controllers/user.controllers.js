import User from "../models/user.model.js"

export const registerUser = async (req, res) => {
    try {
        let { firstName, lastName, dob } = req.body
        firstName = firstName.toLowerCase()
        lastName = lastName.toLowerCase()

        if (!firstName && !lastName && !dob) {
            return res.status(400).json({ status: false, message: "All fields are required" })
        }

        const existingUser = await User.findOne({ firstName, lastName, dob })

        if (existingUser) {
            return res.status(409).json({
                status: false,
                message: "User already exists with this name."
            })
        }

        const newUser = await User.create({
            firstName,
            lastName,
            dob
        })

        const accessToken = newUser.generateAccessToken()

        const cookieOptions = {
            sameSite: "none",
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
        }

        res.status(201).cookie("accessToken", accessToken, cookieOptions).json({
            status: true,
            message: "User registered successfully.",
            user: newUser
        })

    } catch (error) {
        console.log("Register error: ", error)
        res.status(500).json({ message: "Internal server error" })
    }
}