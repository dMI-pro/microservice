import "./_env/envLoad.js";
import express from "express";
import authRouter from "./src/router/authRouter.js";
import mongoose from "mongoose";

const PORT = 5000;
const app = express();
const DB_URL = process.env.DB_URL

app.use(express.json());
app.use('/api', authRouter);

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server start in PORT - ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

startApp().then();
