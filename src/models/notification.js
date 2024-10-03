import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
        },
        title: {
            type: String,
        },
        body: {
            type: String,
        }
    }
    , {
        timestamps: true
    }
)
const Notification = mongoose.model("notification", notificationSchema);
export { Notification }