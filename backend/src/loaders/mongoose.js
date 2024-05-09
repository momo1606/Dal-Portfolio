//Author: Hatim Patrawala

import mongoose from "mongoose";

import { dbUri } from "../config/index.js";

export default async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(dbUri, {
      dbName: process.env.DB_NAME,
    })
    .then(() => {
      console.log("Mongodb Connection");
    })
    .catch((err) => {
      console.log(err);
    });
};
