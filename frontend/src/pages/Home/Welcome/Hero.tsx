//Author: Hatim Patrawala

import { Box, Typography } from "@mui/material";
import { Button } from "components";
import { useOnMobile, useOnTablets } from "hooks";
import HeroInfographicLight from "assets/images/hero_infographic_light.png";
import { useAppStore } from "store";
import { useNavigate } from "react-router-dom";

type Props = {};

const Hero = (props: Props) => {
  const [state, dispatch] = useAppStore();
  const navigate = useNavigate();
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();
  return (
    <Box sx={{ p: onMobile ? "100px 0" : "160px 0px 0px 0px" }}>
      <Box
        sx={{
          zIndex: 1,
          width: "100%",
          maxWidth: "1300px",
          mx: "auto",
          px: onMobile ? "30px" : "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            m: "0 -15px -15px -15px",
            flexWrap: "wrap",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              mb: "15px",
              px: "15px",
              flex: 1,
              maxWidth: "50%",
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
            <Box
              sx={{
                maxWidth: "540px",
                pt: 0,
                pb: "60px",
                ...((onTablets || onMobile) && { pb: "65px" }),
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  lineHeight: "16px",
                  fontWeight: 700,
                  letterSpacing: "1.4px",
                  marginBottom: "16px",
                }}
              >
                Welcome to DALPortfolio
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  mb: "24px",
                  fontSize: "38px",
                  lineHeight: 1.1,
                  fontWeight: 600,
                }}
              >
                Empowering academic excellence through portfolio management
              </Typography>
              <Typography
                sx={{
                  maxWidth: "440px",
                  mb: "35px",
                  fontSize: "18px",
                  lineHeight: "24px",
                }}
              >
                Showcase your academic journey, collaborate, and discover
                opportunities in one place.
              </Typography>
              <Button
                label="Create Portfolio"
                sx={{ margin: 0 }}
                onClick={() =>
                  !!state?.isAuthenticated
                    ? navigate(`/profile`)
                    : navigate(`/login`)
                }
              />
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: "540px",
              pt: 0,
              pb: "60px",
              ...((onTablets || onMobile) && { pb: "65px" }),
            }}
          >
            <Box
              sx={{
                maxWidth: "555px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                src={HeroInfographicLight}
                alt="Dal Portfolio"
                style={{
                  paddingRight: 0,
                  border: 0,
                  maxWidth: "100%",
                  verticalAlign: "middle",
                  display: "inline-block",
                  maxHeight: "500px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
