// Author: Zainuddin Saiyed

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useOnMobile, useOnTablets } from "hooks";
import { Icon } from "components";

type Props = {
  id: string;
  portfolio: any;
};

const Resume = ({ id, portfolio }: Props) => {
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();

  if (portfolio.resume) {

    return (
      <section id={id} style={{ minHeight: "50vh", padding: "3rem" }}>
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
                  fontSize: onMobile?"3rem": "4rem",
                  lineHeight: "5.5rem",
                  fontWeight: 700,
                }}
              >
                RESUME
              </Typography>

              <Typography sx={{ mb: "1rem" }}>
                Learn more about my skills and experience, Download my resume:
              </Typography>
              <Button
                variant="contained"
                href={portfolio.resume}
                startIcon={<Icon name="download" />}
                download
              >
                Download Resume
              </Button>
            </Box>
          </Box>
        </Box>
      </section>
    );
  }
};

export default Resume;
