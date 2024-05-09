//Author: Boon Undrajavarapu

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const researchSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  contributors: {
    type: [String],
    required: true,
  },
});

const CollabResearch = model("research_studies", researchSchema);
export default CollabResearch;
