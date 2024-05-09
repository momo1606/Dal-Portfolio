//Author: Boon Undrajavarapu

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const projectStatus = new Schema(
  {
    project_id: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    _id: false,
  }
);

const collaborationRequest = new Schema({
  receiver_user_id: {
    type: String,
    required: true,
  },
  sender_user_id: {
    type: String,
    required: true,
  },
  projects: [projectStatus],
  researchs: [projectStatus],
});

const collabRequest = model("collab_requests", collaborationRequest);
export default collabRequest;
