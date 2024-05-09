//Author: Hatim Patrawala

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const profileSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    gender: String,
    pronouns: String,
    dob: Date,
  },
  {
    _id: false,
  }
);

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      // match: /^[a-zA-Z0-9]+$/,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      // match:
      //   /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: profileSchema,
      required: true,
    },
    type: {
      type: String,
      enum: ["admin", "user", "recruiter", "creator", "student", "alumni", "staff", "faculty"],
      default: "user",
    },
    photoUrl: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      required: true,
    },
    deletedAt: {
      type: Date,
    },
    theme: {
      type: String,
      enum: ["light", "dark"],
      default: "light",
    }
  },
  {
    timestamps: true,
    collection: "user",
  }
);

const User = model("User", userSchema);
export default User;
