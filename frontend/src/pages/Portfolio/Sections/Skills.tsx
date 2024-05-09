// Author: Zainuddin Saiyed

import React from "react";
import { Box, Paper, Typography, Grid, LinearProgress } from "@mui/material";
import { useOnMobile, useOnTablets } from "hooks";

type Props = {
  id: string;
  portfolio: any;
};

// Helper function to get color of bar line depending on teh skill rating 
const getProgressBarColor = (rating: any) => {
  if (rating >= 4) {
    return "#4867D5";
  } else if (rating >= 3 && rating < 4) {
    return "#27A562";
  } else if (rating >= 2 && rating < 3) {
    return "#FFC107";
  } else {
    return "#F44336";
  }
};

const Skills = ({ id, portfolio }: Props) => {
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();

  return (
    <section id={id} style={{ minHeight: "100vh", padding: "3rem" }}>
      <Box sx={{ p: onMobile ? "100px 0" : "160px 0px 0px 0px" }}>
        <Box sx={{ my: "auto" }}>
          <Box
            sx={{
              mb: "2rem",
              px: "15px",
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
              SKILLS
            </Typography>

            <Grid
              container
              spacing={2}
              style={{
                maxWidth: "75%",
                margin: "0 auto",
                marginBottom: "2rem",
              }}
            >
              {portfolio.skills.map((skill: any, index: number) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    elevation={3}
                    style={{
                      padding: "1.2rem",
                      height: "100%",
                      borderRadius: "1rem",
                    }}
                  >
                    <Typography style={{ fontSize: "1.15rem" }}>
                      {skill.name}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={skill.rating * 20}
                      sx={{
                        height: "10px",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: getProgressBarColor(skill.rating),
                        },
                      }}
                    />
                    <Typography style={{ fontSize: "1.15rem" }}>
                      {skill.rating}/5
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
