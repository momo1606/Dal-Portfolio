// Author: Zainuddin Saiyed

import {
  Box,
  CssBaseline,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useTextColor from "hooks/textColor";
import React, { useEffect } from "react";
import Bio from "./Sections/Bio";
import Education from "./Sections/Education";
import WorkExperience from "./Sections/WorkExperience";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Certifications from "./Sections/Certifications";
import Resume from "./Sections/Resume";
import Contact from "./Sections/Contact";
import { GET } from "utils/axios";

import { CircularProgress, Alert, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";

import UserDefault from "assets/images/user_default.png";
import { isEmpty } from "utils/helpers";
import { useOnMobile, useOnTablets } from "hooks";

type Props = {};

const PortfolioLinks = [
  {
    name: "About",
    id: "template-section-bio",
    component: Bio,
  },
  {
    name: "Education",
    id: "template-section-education",
    component: Education,
  },
  {
    name: "Work Experience",
    id: "template-section-work-experience",
    component: WorkExperience,
  },
  {
    name: "Projects",
    id: "template-section-projects",
    component: Projects,
  },
  {
    name: "Skills",
    id: "template-section-skills",
    component: Skills,
  },
  {
    name: "Certifications",
    id: "template-section-certifications",
    component: Certifications,
  },
  {
    name: "Resume",
    id: "template-section-resume",
    component: Resume,
  },
  {
    name: "Collaborate",
    id: "template-section-contact",
    component: Contact,
  },
];

const Portfolio = (props: Props) => {
  const { portfolio_id } = useParams();
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const [bgColor, setBgColor] = React.useState<string>("#fff");
  const [portfolio, setPortfolio] = React.useState<any>({});
  const [selectedLink, setSelectedLink] = React.useState<string>("About");
  const [loading, set_loading] = React.useState(true);
  const [flag_failed, set_flag_failed] = React.useState(false);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const MenuToggleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const textColor = useTextColor(bgColor);

  const fetchPortfolio = async () => {
    set_loading(true);
    console.log(portfolio_id);
    GET(`/api/portfolio/${portfolio_id}`)
      ?.then((res) => {
        setPortfolio(res?.data?.portfolio);
        setBgColor(res?.data?.portfolio?.configuration?.color);
        set_loading(false);
      })
      .catch((res) => {
        set_flag_failed(true);
        setPortfolio(null);
        set_loading(true);
      })
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  if (loading && !flag_failed) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography style={{ marginRight: "2rem" }}>
          Hang Tight! Loading Portfolio details...
        </Typography>
        <CircularProgress color="warning" size={60} />
      </Box>
    );
  }

  if ((!portfolio || isEmpty(portfolio)) && loading) {
    return (
      <div>
        <Alert severity="warning" variant="filled">
          OOPS! Portfolio not found for this user.
        </Alert>
        <Typography style={{ marginTop: "2rem" }}>
          Try visiting the <Link href="/search-page">search page</Link> to find
          the portfolio of your desired user.
        </Typography>
      </div>
    );
  }

  return (
    <Box>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: onMobile ? "column" : "row",
          height: "100vh",
        }}
      >
        {onMobile ? (
          <div>
            <IconButton onClick={MenuToggleOpen}>
              <MenuIcon />
            </IconButton>

            <Collapse in={menuOpen}>
              <List>
                {PortfolioLinks?.map((ins: any) => (
                  <ListItem
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setSelectedLink(ins?.name);
                      scrollToSection(ins?.id);
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: textColor === "black" ? "grey" : "#ffffff80",
                        textTransform: "uppercase",
                        "&:hover": {
                          color: textColor,
                        },
                        ...(ins?.name === selectedLink && {
                          color: textColor,
                        }),
                      }}
                    >
                      {ins?.name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ) : (
          <Box
            sx={{
              width: "17rem",
              height: "100%",
              padding: 2,
              background: bgColor,
              color: textColor,
            }}
          >
            <Stack
              height={"100%"}
              justifyContent={"space-between"}
              textAlign={"center"}
            >
              <Box
                sx={{
                  height: "40%",
                  alignContent: "flex-end",
                  padding: 1,
                  mx: "auto",
                }}
              >
                <img
                  style={{
                    height: "10rem",
                    width: "10rem",
                    borderRadius: "50%",
                    border: ".5rem solid rgba(255,255,255,.2)",
                  }}
                  src={
                    portfolio?.bio?.photo_url
                      ? portfolio?.bio?.photo_url
                      : UserDefault
                  }
                  alt="user"
                />
              </Box>
              <Box
                sx={{
                  height: "60%",
                  alignContent: "flex-start",
                  padding: 1,
                  mx: "auto",
                }}
              >
                <List>
                  {PortfolioLinks
                  ?.filter((ins: any) => ins.name !== "Resume" || portfolio.resume)
                  .map((ins: any) => (
                    <ListItem
                      key = {ins.name}
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setSelectedLink(ins?.name);
                        scrollToSection(ins?.id);
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: textColor === "black" ? "grey" : "#ffffff80",
                          textTransform: "uppercase",
                          "&:hover": {
                            color: textColor,
                          },
                          ...(ins?.name === selectedLink && {
                            color: textColor,
                          }),
                        }}
                      >
                        {ins?.name}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Stack>
          </Box>
        )}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
          }}
        >
          {PortfolioLinks?.map(({ name, component: Component, id }: any) => (
            <Component id={id} portfolio={portfolio} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;