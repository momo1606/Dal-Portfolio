//Author: Hatim Patrawala

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const logSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId },
    resultCode: { type: String, required: true },
    level: { type: String, required: true },
    message: { type: String, required: true },
    ip: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "logs",
  }
);

const Log = model("Log", logSchema);
export default Log;
