import mongoose from "mongoose";

const reqChangePasswordSchema = new mongoose.Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    },
    status: {
        type: Boolean
    }
}, {
    timestamps: true,
});
const reqChangePassword = mongoose.model("reqChangePassword", reqChangePasswordSchema);
export { reqChangePassword }