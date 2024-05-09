//Author: Boon Undrajavarapu

import {
  CollabRequests,
  CollabProjects,
  CollabResearchStudies,
} from "../../../models/index.js";

export default async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const receiver_user_id = user_id;
    const collab_requests = await CollabRequests.find({ receiver_user_id });

    console.log("Collab Requests:", collab_requests);

    // Filter collab requests based on project status
    const filteredCollabRequests = collab_requests.map((request) => {
      const filteredProjects = request.projects.filter(
        (project) => project.status === "PENDING"
      );
      return { ...request.toObject(), projects: filteredProjects };
    });

    console.log("Filtered Collab Requests:", filteredCollabRequests);

    // Return the filtered collab requests
    return res.status(200).json(filteredCollabRequests);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
