//Author: Boon Undrajavarapu

import { Portfolio } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const { user_id } = req.query;

    console.log("user_id", user_id);
    const projects = await Portfolio.findOne({ user_id }, "projects");

    // Check if projects exist
    if (!projects) {
      return res.status(404).json({ error: "No projects found" });
    }

    // Return projects
    return res.status(200).json(projects);
  } catch (error) {
    // Handle error
    return res.status(500).json({ error: "Failed to fetch projects" });
  }
};
