// Author: Zainuddin Saiyed

import React from "react";
import { Box, Paper, Link, Typography } from "@mui/material";
import { useOnMobile, useOnTablets } from "hooks";
import { Icon } from "components";

type Props = {
  id: string;
  portfolio: any;
};

const WorkExperience = ({ id, portfolio }: Props) => {
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();

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
                fontSize: onMobile? "3rem":"4rem",
                lineHeight: onMobile? "3.5rem": "5.5rem",
                fontWeight: 700,
                marginBottom: onMobile? "1rem":""
              }}
            >
              WORK EXPERIENCE
            </Typography>

            {portfolio.experience.map((item: any, index: number) => (
              <Paper
                key={index}
                elevation={3}
                style={{ padding: "20px", marginBottom: "2rem" }}
              >
                {/* , backgroundColor: index === 0 ? '#ffffe0' : '#fff' */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: onMobile ? "column" : "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{ fontSize: onMobile? "1.4rem": "1.75rem", fontWeight: "bold" }}
                  >
                    {item.company_name}
                  </Typography>
                  {!onMobile && (
                    <Typography>
                      {new Date(item.start_date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {new Date(item.end_date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </Typography>
                  )}
                </div>
                <Typography style={{ fontWeight: "bold" }}>
                  {item.role}
                </Typography>
                {onMobile && (
                  <Typography>
                    {new Date(item.start_date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {new Date(item.end_date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </Typography>
                )}
                <Typography>{item.location}</Typography>
                {item.description && (
                  <>
                    <Typography style={{ marginTop: "1.5rem", fontWeight: "bold" }}>
                      Summary:
                    </Typography>
                    <Typography style={{ fontStyle: "italic" }}>
                      {item.description}
                    </Typography>
                  </>
                )}
                <Typography style={{ marginTop: "1.5rem", alignItems: "center", display: "flex" }}>
                  <Icon name="city" sx={{ fontSize: "30px", marginRight: "0.5rem" }} />
                  <Link
                    href={item.company_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.company_name}
                  </Link>
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default WorkExperience;