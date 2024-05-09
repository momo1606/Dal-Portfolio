//Author: Boon Undrajavarapu

import { GET, POST } from "utils/axios";
import { Typography } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { isEmpty } from "utils/helpers";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from "components";
import { useAppStore } from "store";
import { useNavigate, useParams } from "react-router-dom";

function MyProjects() {
  const user_id = useParams().user_id;
  console.log(useParams().user_id);
  const navigate = useNavigate();

  var logged_in_user_id = "";
  const [state, dispatch] = useAppStore();

  const [projects, setProjects] = useState([]);
  const [research, setResearch] = useState([]);
  const [selectedProjectCheckboxes, setSelectedProjectCheckboxes] = useState(
    []
  );
  const [selectedResearchCheckboxes, setSelectedResearchCheckboxes] = useState(
    []
  );

  const fetchProjects = async (logged_in_user_id) => {
    GET(`/api/collaboration/fetch_projects?user_id=${logged_in_user_id}`)
      .then((response) => {
        console.log(response.data.projects);
        setProjects(response.data.projects);
        console.log(projects);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchResearch = async (logged_in_user_id) => {
    GET(`/api/collaboration/fetch_research?user_id=${logged_in_user_id}`)
      .then((response) => {
        console.log(response.data);
        setResearch(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useLayoutEffect(() => {
    logged_in_user_id = state?.currentUser?._id;
    isEmpty(projects) && fetchProjects(logged_in_user_id);
    isEmpty(research) && fetchResearch(logged_in_user_id);
  }, []);

  const handleProjectCheckboxChange = (id) => {
    const updatedCheckboxes = [...selectedProjectCheckboxes];
    const index = updatedCheckboxes.indexOf(id);

    if (index > -1) {
      updatedCheckboxes.splice(index, 1);
    } else {
      updatedCheckboxes.push(id);
    }

    console.log(updatedCheckboxes);
    setSelectedProjectCheckboxes(updatedCheckboxes);
  };

  const handleResearchCheckboxChange = (id) => {
    const updatedCheckboxes = [...selectedResearchCheckboxes];
    const index = updatedCheckboxes.indexOf(id);

    if (index > -1) {
      updatedCheckboxes.splice(index, 1);
    } else {
      updatedCheckboxes.push(id);
    }

    console.log(updatedCheckboxes);
    setSelectedResearchCheckboxes(updatedCheckboxes);
  };

  const isButtonEnabled =
    selectedProjectCheckboxes.length > 0 ||
    selectedResearchCheckboxes.length > 0;

  const handleSendRequest = (receiver_user_id, sender_user_id) => {
    console.log("logged_in_user_id: ", state?.currentUser?._id);
    console.log("user_id: ", receiver_user_id);
    if (!isEmpty(state?.currentUser)) {
      console.log("User is logged in", state?.currentUser);
      POST("/api/collaboration/send_request", {
        receiver_user_id: receiver_user_id,
        sender_user_id: sender_user_id,
        projects: selectedProjectCheckboxes,
        researchs: selectedResearchCheckboxes,
        status: "PENDING",
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("User is not logged in");
      GET(`/api/collaboration/fetch_user?user_id=${user_id}`)
        .then((response) => {
          console.log(response.data);
          const email = response.data.email;
          console.log("email: ", email);

          const subject = encodeURIComponent("Opportunity: Interview Inquiry");
          window.location.href = `mailto:${email}?subject=${subject}`;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    console.log("projects: ", selectedProjectCheckboxes);
    console.log("research: ", selectedResearchCheckboxes);

    navigate("/search-page");
  };

  return (
    <>
      <div className="container box">
        <div className="row d-flex">
          <div className="container p-5">
            {projects?.length > 0 ? (
              <>
                <div className="text-center">
                  <Typography
                    variant="h2"
                    sx={{
                      mb: "24px",
                      fontSize: "38px",
                      lineHeight: 1.1,
                      fontWeight: 600,
                    }}
                  >
                    My Projects
                  </Typography>
                </div>
                <form>
                  <div className="project">
                    {projects.map((project) => (
                      <div
                        key={project.title}
                        className="project-item p-3 d-flex align-items-center"
                        style={{ maxWidth: "500px", margin: "auto" }}
                      >
                        <label className="d-flex">
                          <input
                            type="checkbox"
                            value={project.title}
                            onChange={() =>
                              handleProjectCheckboxChange(project.title)
                            }
                          />
                          <div className="project-title mx-4 px-2">
                            <Typography
                              sx={{
                                fontSize: "18px",
                                lineHeight: "24px",
                              }}
                            >
                              {project.title}
                            </Typography>
                          </div>
                        </label>
                        <div
                          className="d-flex px-5 py-3"
                          style={{ whiteSpace: "nowrap" }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <Typography
                  variant="h2"
                  sx={{
                    mb: "24px",
                    fontSize: "38px",
                    lineHeight: 1.1,
                    fontWeight: 600,
                  }}
                >
                  No Projects available
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-center m-5">
        <Button
          label="Send Request"
          disabled={!isButtonEnabled}
          onClick={() => handleSendRequest(user_id, state?.currentUser?._id)}
          sx={{ margin: 0 }}
        />
      </div>
    </>
  );
}

export default MyProjects;
