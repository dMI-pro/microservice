import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

async function dbConnect() {
    try {
        await mongoose.connect(DB_URL)
    } catch (e) {
        console.log(e);
    }
}

export default dbConnect;
