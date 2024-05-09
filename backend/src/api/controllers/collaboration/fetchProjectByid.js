//Author: Boon Undrajavarapu

import { CollabProjects } from "../../../models/index.js";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const { id } = req.query;
    const project = await CollabProjects.find({ _id: ObjectId(id) }); // Fetch document by _id
    if (!project) {
      // Check if document exists
      return res.status(404).json({ error: "Project not found" });
    }
    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
  //todo: send 401 after auth logic is available to prevent unauthorized access
};
