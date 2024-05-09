//Author: Hatim Patrawala

import { Grid, Stack, Typography } from "@mui/material";

import { useOnMobile } from "hooks";
import { Icon, Link } from "components";
import DalPortfolioDark from "assets/images/dal_portfolio_black_bg.png";

type Props = {};

const Footer = (props: Props) => {
  const onMobile = useOnMobile();

  const iconStyles = {
    cursor: "pointer",
    "&:hover": {
      color: "#0467fb",
      transition: "0.3s ease-out",
    },
  };

  return (
    <Stack
      sx={{
        color: "#fff",
        alignItems: "center",
        background: "#242424",
        padding: "2rem 0 2rem 0",
        justifyContent: "center",
        borderTop: "1px solid #fcd405",
      }}
    >
      <Grid
        spacing={2}
        container
        sx={{
          width: "100%",
          display: "flex",
          maxWidth: "1000px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h6" sx={{ mb: "16px" }}>
              About Us
            </Typography>
            <Link to="/" color={"white"}>
              Benefits
            </Link>
            <Link to="/" color={"white"}>
              Testimonials
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h6" sx={{ mb: "16px" }}>
              Contact Us
            </Typography>
            <Link to="/contact-us" color={"white"}>
              Contact
            </Link>
            <Link to="/" color={"white"}>
              Support
            </Link>
          </Stack>
        </Grid>
      </Grid>
      <Stack component="section" sx={{ maxWidth: "1000px", width: "100%" }}>
        <Stack
          sx={{
            width: "90%",
            justifyContent: "space-between",
            alignItems: "center",
            m: "40px auto 0 auto",
          }}
          direction={onMobile ? "column" : "row"}
        >
          <Link
            to="/"
            sx={{
              cursor: "pointer",
              width: "200px",
              mb: "16px",
            }}
          >
            <img
              src={DalPortfolioDark}
              alt="Company Logo"
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
                verticalAlign: "middle",
              }}
            />
          </Link>
          <Typography
            variant="subtitle2"
            sx={{ mb: onMobile ? "30px" : "none" }}
          >
            DalPortfolio &copy; {new Date().getFullYear()} All rights reserved
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              width: "240px",
            }}
          >
            <Icon name="facebook" sx={iconStyles} />
            <Icon name="instagram" sx={iconStyles} />
            <Icon name="youtube" sx={iconStyles} />
            <Icon name="twitter" sx={iconStyles} />
            <Icon name="linkedin" sx={iconStyles} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
