import { Box, Typography } from "@mui/material";
import { useOnMobile, useOnTablets } from "hooks";
import React from "react";
import StudentIcon from "assets/images/student_icon.png";
import RecruiterIcon from "assets/images/recruiter_icon.png";
import ProfessorIcon from "assets/images/researcher_icon.png";

type Props = {};

const Usage = (props: Props) => {
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();
  const benefits = [
    {
      title: "Students",
      desc: "Students can increase their visibility and recognition through DalPortfolio, which facilitates networking and collaboration across disciplines, streamlining the job search process.",
      icon: StudentIcon,
    },
    {
      title: "Professors & Researchers",
      desc: "Professors & Researchers can benefit from DalPortfolio's enhanced visibility and cross-disciplinary collaboration through research networking opportunities.",
      icon: ProfessorIcon,
    },
    {
      title: "Recruiters",
      desc: "Recruiters can benefit from DalPortfolio's streamlined candidate evaluation process and access to a diverse talent pool, enhancing recruitment efficiency.",
      icon: RecruiterIcon,
    },
  ];

  return (
    <Box
      sx={{
        padding: "100px 0 160px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
          ...((onMobile || onTablets) && {
            margin: "0 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }),
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "40px",
            marginBottom: "24px",
          }}
        >
          Benefits
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...((onMobile || onTablets) && {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }),
          }}
        >
          {benefits?.map((benefit, index) => (
            <Box
              sx={{
                background: "#242424",
                cursor: "pointer",
                border: "2px solid #fcd405",
                width: "280px",
                height: "400px",
                textDecoration: "none",
                borderRadius: "4px",
                "&:nth-child(2)": {
                  mx: "40px",
                  my: "20px"
                },
                "&:hover": {
                  transform: "scale(1.06)",
                  transition: " all 0.3s ease-out",
                  color: "#1c2237",
                },
                ...((onMobile || onTablets) && {
                  width: "90%",
                  "&:hover": {
                    transform: "none",
                  },
                }),
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "400px",
                  padding: "25px",
                  alignItems: "center",
                  color: "#fff",
                  // justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    marginBottom: "30px",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  {benefit.title}
                </Typography>
                <Box sx={{ marginBottom: "30px" }}>
                  <img
                    style={{ height: "80px", width: "80px" }}
                    src={benefit.icon}
                    alt="icon"
                  />
                </Box>
                <Typography
                  sx={{
                    color: "#a9b3c1",
                    fontSize: "16px",
                  }}
                >
                  {benefit.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Usage;
