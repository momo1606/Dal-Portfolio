import { Box, Stack } from "@mui/material/";
import { Outlet, useNavigate } from "react-router-dom";
import { FC, PropsWithChildren, useCallback, useState } from "react";

import TopBar from "layout/TopBar";
import SideBar from "layout/SideBar";
import { LinkToPage } from "utils/type";
import { useOnMobile } from "hooks/layout";
import { useAppStore } from "store/AppStore";
import { useSwitchMode } from "hooks/event";
import { Button, ErrorBoundary, IconButton } from "components";
import DalPortfolioDark from "assets/images/dal_portfolio_black_bg.png";
import DalPortfolioLight from "assets/images/dal_portfolio_white_bg.png";
import { TOP_BAR_DESKTOP_HEIGHT, TOP_BAR_MOBILE_HEIGHT } from "layout/config";
import { POST } from "utils/axios";
import tokenService from "utils/token-service";
import useLogout from "hooks/useLogout";

const SIDEBAR_ITEMS_LOGGED_IN: Array<LinkToPage> = [
  { title: "FAQs", path: "/faq", icon: "faq" },
  { title: "Contact Us", path: "/contact-us", icon: "contactus" },
  { title: "About Us", path: "/about-us", icon: "info" },
  { title: "Profile", path: "/profile", icon: "profile" },
  { title: "Search", path: "/search-page", icon: "search" },
  { title: "Discussions", path: "/dalportfolios-discussions", icon: "search" },
  { title: "Logout", path: "/logout", icon: "logout" }
];

const SIDEBAR_ITEMS_LOGGED_OUT: Array<LinkToPage> = [
  { title: "FAQs", path: "/faq", icon: "faq" },
  { title: "Contact Us", path: "/contact-us", icon: "contactus" },
  { title: "About Us", path: "/about-us", icon: "info" },
  { title: "Search", path: "/search-page", icon: "search" },
  { title: "Discussions", path: "/dalportfolios-discussions", icon: "search" },
  { title: "SignUp", path: "/signup", icon: "signup" },
  { title: "Login", path: "/login", icon: "login" }
];
// const NAVBAR_ITEMS: Array<LinkToPage> = SIDE_BAR_ITEMS.filter(
//   (ins: any) => !["Home", "Log In", "Sign Up"].includes(ins?.title)
// );

const PublicLayout: FC<PropsWithChildren> = () => {
  const logout = useLogout();
  const onMobile = useOnMobile();
  const navigate = useNavigate();
  const switchMode = useSwitchMode();
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [state, dispatch] = useAppStore();
  const sidebarItems = state.isAuthenticated ? SIDEBAR_ITEMS_LOGGED_IN : SIDEBAR_ITEMS_LOGGED_OUT;
  const SIDE_BAR_ITEMS = sidebarItems;
  const NAVBAR_ITEMS: Array<LinkToPage> = SIDE_BAR_ITEMS.filter(
    (ins: any) => !["Home", "Log In", "Sign Up"].includes(ins?.title)
  );

  const sidebarOpen = sideBarVisible;
  const sidebarVariant = "temporary";

  const onSideBarOpen = useCallback(() => {
    if (!sideBarVisible) setSideBarVisible(true);
  }, [sideBarVisible]);

  const onSideBarClose = useCallback(() => {
    if (sideBarVisible) setSideBarVisible(false);
  }, [sideBarVisible]);

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        paddingTop: onMobile ? TOP_BAR_MOBILE_HEIGHT : TOP_BAR_DESKTOP_HEIGHT,
      }}
    >
      <Stack component="header">
        <TopBar
          content={
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              {onMobile && <IconButton icon="menu" onClick={onSideBarOpen} />}
              <Stack direction={"row"} alignItems={"center"}>
                <Box
                  onClick={() => navigate("/")}
                  sx={{
                    cursor: "pointer",
                    width: "200px",
                  }}
                >
                  <img
                    src={
                      !!state?.darkMode ? DalPortfolioDark : DalPortfolioLight
                    }
                    alt="Company Logo"
                    style={{
                      objectFit: "contain",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      verticalAlign: "middle",
                    }}
                  />
                </Box>
                <Stack direction={"row"} alignItems={"center"}>
                {!onMobile &&
                  NAVBAR_ITEMS?.map((item: any, index: number) => {
                    //if(item?.title !== "Logout" && item?.title !== "Login" && item?.title !== "SignUp")
                    if(true){
                    return (<Button
                      variant="text"
                      to={item?.path}
                      sx={{
                        margin: 1,
                        color: state?.darkMode ? "white" : "black",
                        backgroundColor: "none",
                      }}
                      onClick={async () => {
                        // if (item?.path === "/logout") {
                        //   logout();
                        // } else {
                        //   navigate(item?.path);
                        // }
                        navigate(item?.path);
                      }}
                      key={`navbar-item-${index}`}
                      label={item?.title}
                    />)}
                    })}
               </Stack>
              </Stack>
              <IconButton
                icon={state.darkMode ? "day" : "night"}
                title={
                  state.darkMode
                    ? "Switch to Light mode"
                    : "Switch to Dark mode"
                }
                onClick={switchMode}
              />
            </Stack>
          }
        />

        {onMobile && (
          <SideBar
            anchor="left"
            open={sidebarOpen}
            variant={sidebarVariant}
            items={SIDE_BAR_ITEMS}
            onClose={onSideBarClose}
          />
        )}
      </Stack>

      <Stack
        component="main"
        sx={{
          flexGrow: 1,
          padding: 1,
        }}
      >
        <ErrorBoundary name="Content">{<Outlet />}</ErrorBoundary>
      </Stack>
    </Stack>
  );
};

export default PublicLayout;
