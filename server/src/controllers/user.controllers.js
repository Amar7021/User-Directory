import User from "../models/user.model.js"

export const registerUser = async (req, res) => {
    try {
        let { firstName, lastName, dob } = req.body
        firstName = firstName.toLowerCase()
        lastName = lastName.toLowerCase()

        if (![firstName, lastName, dob].every(Boolean)) {
            return res.status(400).json({ status: false, message: "All fields are required" })
        }

        const existingUser = await User.findOne({ firstName, lastName, dob })

        if (existingUser) {
            return res.status(409).json({
                status: false,
                message: "User already exists with this name."
            })
        }
        
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        const result = await response.json()
        const profileImg = result?.message

        let newUser = await User.create({
            firstName,
            lastName,
            dob,
            profileImg
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

export const logoutUser = async (req, res) => {
    try {
        return res.status(200).clearCookie("accessToken", {
            sameSite: "none",
            httpOnly: true,
            secure: true,
        }).json({
        status: true,
        message: "Logged out successfully.",
      });
    } catch (error) {
           console.log("Logout error: ", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const getUser = async (req, res) => {
    try {
        return res.status(200).json({
            status: true,
            message: "User details fetched successfully.",
            user: req.user, 
        })
    } catch (error) {
        console.log("Get user error: ", error)
        res.status(500).json({ message: "Internal server error" })
    }
}