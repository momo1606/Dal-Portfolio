//Author: Sushank Saini
import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "@fontsource/public-sans";
import { Grid } from "@mui/material";

const Banner = () => {
  return (
    <Grid justifyContent="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper
          style={{
            background: "#FCD405",
            padding: "30px",
            textAlign: "center",
            maxWidth: "100%",
            margin: 0,
          }}
        >
          <Grid justifyContent="center">
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <Typography
                variant="h4"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Public Sans",
                  display: "inline",
                }}
              >
                DalPortfolio
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <Typography
                variant="h5"
                style={{
                  color: "black",
                  fontFamily: "Public Sans",
                  display: "inline",
                }}
              >
                Discussions
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Banner;
