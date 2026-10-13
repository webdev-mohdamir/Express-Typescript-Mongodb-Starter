import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDb = async (): Promise<void> =>{
    try {
        const connection = await mongoose.connect(env.MONGO_URI);
        console.log("MongoDB connected:", connection.connection.host, connection.connection.name);
    } catch (error) {
        console.log("MongoDB connection error:", (error as any).message);
        process.exit(1);
    }
}