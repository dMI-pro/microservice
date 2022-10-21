import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
        sevirity: {enum: ['LOG','INFO','WARNING','ERROR','CRITICAL']}, //enum<'LOG','INFO','WARNING','ERROR','CRITICAL'>
        topic: {type: String},
        stack: {type: String},
        createdAt: {type: Date},
        updatedAt: {type: Date},
    }
)

export default mongoose.model('Login', LoginSchema);
