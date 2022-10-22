import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
        endpoint: {type: String},
        status: {type: Boolean}, // true: success, false: failed
        payload: {type: Object},
        response: {type: Object},
        http_code: {type: Number}, // Integer
    }
)

export default mongoose.model('Request', RequestSchema);
