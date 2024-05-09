//Author: Boon Undrajavarapu

import { Router } from "express";
import {
  fetchProjects,
  fetchResearch,
  fetchProjectByid,
  fetchResearchByid,
  sendRequest,
  fetchCollabRequestsById,
  sendUpdate,
  fetchUserById,
} from "../controllers/collaboration/index.js";

const router = Router();

router.get("/fetch_projects", fetchProjects);
router.get("/fetch_research", fetchResearch);
router.get("/fetch_project", fetchProjectByid);
router.get("/fetch_research_study", fetchResearchByid);

router.post("/send_request", sendRequest);

router.get("/fetch_collab_requests", fetchCollabRequestsById);

router.post("/send_update", sendUpdate);
router.get("/fetch_user", fetchUserById);

export default router;
