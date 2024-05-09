// Author: Zainuddin Saiyed

import React from "react";
import { Box, Paper, Typography, Button, Chip } from "@mui/material";
import { useOnMobile, useOnTablets } from "hooks";
import { useParams } from "react-router-dom";
import { Icon } from "components";

type Props = {
  id: string;
  portfolio: any;
};

// Helper funciton to trim description upto 350 chacratersby default
function trimDescriptionSummary(description: any, maxCharLength = 350) {
  if (description.length <= maxCharLength) {
    return description;
  }

  // Find index of last whitespace before the max character length
  let whiteSpaceIndex = description.lastIndexOf(" ", maxCharLength - 1);

  // If no space is found before the maxLength, use maxLength directly
  if (whiteSpaceIndex === -1) {
    whiteSpaceIndex = maxCharLength;
  }

  // slice upto last whitespace's index & then trim any whitespaces at the end.
  let trimmedSummary = description.slice(0, whiteSpaceIndex).trim();

  return trimmedSummary;
}

const Projects = ({ id, portfolio }: Props) => {
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();
  const { portfolio_id } = useParams();

  return (
    <section id={id} style={{ minHeight: "70vh", padding: "3rem" }}>
      <Box sx={{ p: onMobile ? "100px 0" : "160px 0px 0px 0px" }}>
        <Box sx={{ my: "auto" }}>
          <Box
            sx={{
              mb: "2rem",
              flex: 1,
              flexBasis: "50%",
              justifyContent: "center",
              ...(onTablets && {
                maxWidth: "100%",
                flexBasis: "100%",
                display: "flex",
                justifyContent: "center",
              }),
              ...(onMobile && {
                maxWidth: "100%",
                flexBasis: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }),
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: onMobile? "3rem": "4rem",
                lineHeight: "5.5rem",
                fontWeight: 700,
              }}
            >
              PROJECTS
            </Typography>

            <div
              style={{
                columnCount: onMobile ? 1 : 2,
                columnGap: "20px",
                maxWidth: "900px",
                margin: "0 auto",
                marginBottom: "2rem",
              }}
            >
              {portfolio.projects.map((project: any, index: number) => (
                <Paper
                  key={index}
                  elevation={3}
                  style={{ marginBottom: "20px", breakInside: "avoid" }}
                >
                  {" "}
                  {/* , backgroundColor: index % 2 === 0 ? '#F0F2EF' : '#fff' */}
                  <div style={{ alignItems: "center", padding: "20px" }}>
                    <Box style={{ textAlign: "justify" }}>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "1rem",
                        }}
                      >
                        {/* <a
                          key={index}
                          href={`/portfolio/${portfolio_id}/project/${project.project_id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        > */}
                          <Typography
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: "bold",
                              color: "#0d47a1",
                              textAlign: onMobile ? "left" : "justify",
                            }}
                          >
                            {project.title}{" "}
                            <Icon
                              name="newtab"
                              style={{
                                verticalAlign: "middle",
                                marginRight: "5px",
                                color: "black",
                              }}
                            />
                          </Typography>
                        {/* </a> */}
                        {project.status === "completed" ? (
                          <Icon name="doneall" sx={{ color: "green" }} />
                        ) : (
                          <Icon name="pending" sx={{ color: "orange" }} />
                        )}
                      </Box>
                      <Typography style={{fontSize: "1rem"}}>
                        {/* <a
                          key={index}
                          href={`/portfolio/${portfolio_id}/project/${project.project_id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        > */}
                          {trimDescriptionSummary(project.description)}
                          {project.description.length > 350 && (
                            <b>
                              <i>... more</i>
                            </b>
                          )}
                        {/* </a> */}
                      </Typography>

                      <Box style={{ marginTop: "1rem", fontSize: "1rem", display: "flex"}}>
                        Duration: 
                        <Typography style={{marginLeft: "1.5rem"}}>
                          {new Date(project.start_date).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}{" "}
                          -{" "}
                          {new Date(project.end_date).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </Typography>
                      </Box>

                      <Box style={{ marginTop: "1rem", fontSize: "1rem", display: "flex", alignItems:"middle"}}>
                        Status:   
                        <Typography style={{marginLeft: "1.5rem"}}>
                          {project.status === "completed" ? (
                            "Completed"
                          ) : (
                            "In-Progress"
                          )}
                        </Typography>
                      </Box>

                      {project.technologies &&
                        project.technologies.length > 0 && (
                          <div
                            style={{
                              marginTop: "1rem",
                              marginBottom: "0.5rem",
                            }}
                          >
                            {project.technologies.map(
                              (tech_tool: string, index: number) => (
                                <Chip
                                  key={index}
                                  label={tech_tool}
                                  style={{
                                    margin: onMobile ? "0.25rem" : "0.5rem",
                                  }}
                                />
                              )
                            )}
                          </div>
                        )}
                      <Box style={{marginTop:"1rem"}}>
                        <Button
                          variant="contained"
                          href={project.project_url}
                          startIcon={<Icon name="github" />}
                        >
                          View on GitHub
                        </Button>
                        {project.demo_link && (
                          <>
                            {onMobile ? (
                              <>
                                <br />
                                <Button
                                  variant="contained"
                                  href={project.demo_link}
                                  startIcon={<Icon name="link" />}
                                  style={{
                                    marginTop: "1rem",
                                    background: "purple",
                                    color: "white",
                                  }}
                                >
                                  View demo
                                </Button>
                              </>
                            ) : (
                              <Button
                                variant="contained"
                                href={project.demo_link}
                                startIcon={<Icon name="link" />}
                                style={{
                                  marginLeft: "1rem",
                                  background: "purple",
                                  color: "white",
                                }}
                              >
                                View demo
                              </Button>
                            )}
                          </>
                        )}

                      </Box>
                    </Box>
                  </div>
                </Paper>
              ))}
            </div>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Projects;