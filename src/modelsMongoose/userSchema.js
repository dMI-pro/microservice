import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
        first_name: {type: String},
        last_name: {type: String},
        username: {type: String, required: true, unique: true}, //string - required, unique, sparse: true}
        password: {type: String, match: /^(?=.{8,30})(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9])(?=.*[!@#$%^&*=+]).*$/}, // - At least 8 characters, 1 Uppercase, 1 Lowercase, 1 digit. Supports signs,
        toggle: {type: Boolean, default: true}, //boolean, default: true - on/off
        last_login: {type: Date},
        retries: {type: Number},
        ip_whitelist: {type: String},
        createdAt: {type: Date},
        updatedAt: {type: Date},
        deletedAt: {type: Date} //(Optional)
    }
)

export default mongoose.model('User', UserSchema);
