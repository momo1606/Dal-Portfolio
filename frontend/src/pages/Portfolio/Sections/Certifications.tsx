// Author: Zainuddin Saiyed

import React from "react";
import { Box, Paper, Typography, Link } from "@mui/material";
import { useOnMobile, useOnTablets } from "hooks";
import { Icon } from "components";

type Props = {
  id: string;
  portfolio: any;
};

const Certifications = ({ id, portfolio }: Props) => {
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
                fontSize: onMobile? "2.5rem": "4rem",
                lineHeight: "5.5rem",
                fontWeight: 700,
              }}
            >
              CERTIFICATIONS
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
              {portfolio.certifications.map(
                (certification: any, index: number) => (
                  <Paper
                    key={index}
                    elevation={3}
                    style={{ marginBottom: "20px", breakInside: "avoid" }}
                  >
                    {/* , backgroundColor: index % 2 === 0 ? '#F0F2EF' : '#fff' */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "20px",
                      }}
                    >
                      <Icon
                        name="workspace"
                        sx={{ marginRight: "10px", color: "#1976d2" }}
                      />
                      <div>
                        <Typography
                          style={{
                            fontSize: "1.5rem",
                            marginBottom: "1rem",
                            color: "#0d47a1",
                          }}
                        >
                          {certification.title}
                        </Typography>
                        <Typography>Issuer: {certification.issuer}</Typography>
                        <Typography>
                          Issued Date:{" "}
                          {new Date(
                            certification.issue_date
                          ).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </Typography>
                        {(certification.expiry_date ||
                          certification.expiry_date != null) && (
                          <Typography>
                            Expiry Date:{" "}
                            {new Date(
                              certification.expiry_date
                            ).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </Typography>
                        )}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "1rem",
                          }}
                        >
                          <Typography>
                            <Link
                              href={certification.verification_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "green" }}
                            >
                              Verify Certification
                            </Link>
                          </Typography>
                          <Icon
                            name="verified"
                            sx={{ marginLeft: "10px", color: "green" }}
                          />
                        </div>
                      </div>
                    </div>
                  </Paper>
                )
              )}
            </div>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Certifications;
