import mongoose from "mongoose";

export const connectMongo = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI!)
        console.log("Connected to MONGOBABY successfully!")
    } catch (e) {
        console.log(e)
    }
}