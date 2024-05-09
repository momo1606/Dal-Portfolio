// Author: Zainuddin Saiyed

import { Box, Paper, Typography } from "@mui/material";
import { useOnMobile, useOnTablets } from "hooks";

type Props = {
  id: string;
  portfolio: any;
};

const Education = ({ id, portfolio }: Props) => {
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();

  return (
    <section id={id} style={{ minHeight: "70vh", padding: "3rem" }}>
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
            EDUCATION
          </Typography>

          {portfolio.education.map((item: any, index: number) => (
            <Paper
              key={index}
              elevation={3}
              style={{ padding: "1.5rem", marginBottom: "2rem" }}
            >
              {/* , backgroundColor: index === 0 ? '#ffffe0' : '#fff' */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: onMobile ? "column" : "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  style={{
                    fontSize: onMobile? "1.4rem": "1.75rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.university.toLocaleUpperCase()}
                </Typography>
                {!onMobile && (
                  <Typography>
                    {new Date(item.start_date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                    {" "}-{" "}
                    {new Date(item.end_date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </Typography>
                )}
              </Box>
              <Typography style={{ fontWeight: "bold" }}>
                {item.degree}
              </Typography>
              {onMobile && (
                <Typography>
                  {new Date(item.start_date).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                  {" "}-{" "}
                  {new Date(item.end_date).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </Typography>
              )}
              <Typography>{item.field_of_study}</Typography>
              <Typography>
                CGPA : {item.grade_obtained}/{item.max_grade}
              </Typography>
              
              <Typography style={{ marginTop: "1.5rem", fontWeight: "bold" }}>
                Summary:
              </Typography>
              <Typography style={{ fontStyle: "italic" }}>
                {item.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Education;