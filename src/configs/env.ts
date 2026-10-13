import dotenv from "dotenv";
dotenv.config();

export const env = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: parseInt(process.env.PORT ?? "3000"),
    MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/starter_db"
}