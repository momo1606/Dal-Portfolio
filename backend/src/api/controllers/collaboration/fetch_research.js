//Author: Boon Undrajavarapu

import { CollabResearchStudies } from "../../../models/index.js";

export default async (req, res) => {
  try {
    // Fetch research studies based on the user_id
    const { user_id } = req.query;
    const research_studies = await CollabResearchStudies.find({ user_id });

    if (research_studies.length === 0) {
      // If no research studies found, return a 404 status code
      return res.status(404).json({ error: "No research studies found" });
    } else {
      // If research studies found, return a 200 status code with the data
      return res.status(200).json(research_studies);
    }
  } catch (error) {
    // If an error occurs, return a 500 status code with an error message
    return res.status(500).json({ error: "Failed to fetch research studies" });
  }
};
