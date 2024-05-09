//Author: Boon Undrajavarapu

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  contributors: {
    type: [String],
    required: true,
  },
});

const CollabProject = model("projects", projectSchema);
export default CollabProject;
