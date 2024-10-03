import mongoose from 'mongoose';
const { Schema } = mongoose;

const termOfUseSchema = new Schema({
    termOfUse: {
        type: String,
    }
},
    {
        timestamps: true,
    }
);
const termOfUse = mongoose.model("termOfUse", termOfUseSchema);
export { termOfUse }