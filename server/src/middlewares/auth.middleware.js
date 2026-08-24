import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken
        if (!token) {
            return res.status(401).json({
        status: false,
        message: "Unauthenticated. Token expired.",
      })
        }

    const verifiedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const user = await User.findById(verifiedToken._id)
    if (!user) {
      return res.status(401).json({
        status: false,
        message: "Invalid access token.",
      });
    }

    req.user = user
    next()

    } catch (error) {
        console.log("Error while verifying token: ", error)
        res.status(500).json({message: "Internal server error"})
    }
}