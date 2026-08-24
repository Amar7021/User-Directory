import mongoose from "mongoose"

const DBConnect = async () => {
    try {
        const connectioInstance = await mongoose.connect(process.env.MONGO_URI)
        console.log("DB conected on port: ", connectioInstance.connection.port)
    } catch (error) {
        console.log("Error connecting to DB: ", error)
    }
}

export default DBConnect