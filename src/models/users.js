import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        userName: {
            type: String,
        },
        email: {
            type: String,
        },
        mobile: {
            type: String,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            enum:["USER"],
        },
        loginStatus: {
            type: Boolean,
            enum:["logIn","logOut"]
        },
        status:{
            type:String,
            enum:["active","deactive"]
        },
        balance:{
            type:Number,
            default:0,
        },
    }, {
    timestamps: true
})
const Users = mongoose.model("Users", userSchema);
export { Users }