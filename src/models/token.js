import mongoose from 'mongoose';
const { Schema } = mongoose;

const tokenDataSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    id: {
     type:String,
      required: false,
    },
    deviceId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

tokenDataSchema.index({ token: 1, userId: 1 }, { unique: true });

tokenDataSchema.virtual('tokenInfo').get(function() {
  return {
    id: this._id,
    token: this.token,
    userId: this.userId,
    deviceId: this.deviceId,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
});

tokenDataSchema.methods.toJSON = function() {
  const tokenDataObject = this.toObject();
  delete tokenDataObject.__v;
  return tokenDataObject;
};

const TokenData = mongoose.model('TokenData', tokenDataSchema);

export {
  TokenData,
};