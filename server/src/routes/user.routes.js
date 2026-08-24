import express from "express"
import { registerUser, getUser, logoutUser } from "../controllers/user.controllers.js"
import { verifyToken } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.route("/register").post(registerUser)
router.route("/get-user").get(verifyToken, getUser)
router.route("/logout-user", verifyToken).post(logoutUser)

export default router