import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import DBConnect from "./db/index.js"
import userRouter from "./routes/user.routes.js"
import cookieParser from "cookie-parser";

dotenv.config()

const app = express()

// middlewares
app.use(cookieParser())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    exposedHeaders: ["set-cookie"],
}))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

const PORT = process.env.PORT

// connect to db

DBConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}).catch((error) => {
    console.log("DB Connection Error: ", error)
})

// routes
app.get("/", (req, res) => {
    res.send("Hello World!!")
})

app.use("/api/v1/auth/user", userRouter)