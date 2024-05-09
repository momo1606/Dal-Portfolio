// import { useState, useCallback, FC, PropsWithChildren } from "react";
import { useState, FC, PropsWithChildren } from "react";
import { Stack } from "@mui/material";
// import { Outlet, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { useOnMobile } from "hooks";
import { LinkToPage } from "utils/type";
// import { IconButton, ErrorBoundary } from "components";
import { ErrorBoundary } from "components";
import {
  SIDE_BAR_DESKTOP_ANCHOR,
  SIDE_BAR_MOBILE_ANCHOR,
  SIDE_BAR_WIDTH,
  TOP_BAR_DESKTOP_HEIGHT,
  TOP_BAR_MOBILE_HEIGHT,
} from "layout/config";
import useLogout from "hooks/useLogout";


const SIDE_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: "Home",
    path: "/",
    icon: "home",
  },
  {
    title: "Search",
    path: "/search",
    icon: "search",
  },
  {
    title: "Forums",
    path: "/forums",
    icon: "forums",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: "profile",
  },
  {
    title: "Log Out",
    path: "/logout",
    icon: "logout",
  },
];

const PrivateLayout: FC<PropsWithChildren> = () => {
  const logout = useLogout();
  // const navigate = useNavigate();
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const onMobile = useOnMobile();

  const sidebarOpen = onMobile ? sideBarVisible : true;
  const sidebarVariant = onMobile ? "temporary" : "persistent";

  // const onLogoClick = useCallback(() => {
  //   navigate(SIDE_BAR_ITEMS?.[0]?.path || "/");
  // }, [navigate]);

  // const onSideBarOpen = () => {
  //   if (!sideBarVisible) setSideBarVisible(true);
  // };

  const onSideBarClose = () => {
    if (sideBarVisible) setSideBarVisible(false);
  };

  return (
    <Stack
      direction="column"
      sx={{
        minHeight: "100vh",
        paddingTop: onMobile ? TOP_BAR_MOBILE_HEIGHT : TOP_BAR_DESKTOP_HEIGHT,
        paddingLeft:
          sidebarOpen && SIDE_BAR_DESKTOP_ANCHOR.includes("left")
            ? SIDE_BAR_WIDTH
            : 0,
        paddingRight:
          sidebarOpen && SIDE_BAR_DESKTOP_ANCHOR.includes("right")
            ? SIDE_BAR_WIDTH
            : 0,
      }}
    >
      <Stack component="header">
        <TopBar
          // startNode={
          //   <IconButton
          //     icon="logo"
          //     onClick={sidebarOpen ? onLogoClick : onSideBarOpen}
          //   />
          // }
        />

        <SideBar
          anchor={onMobile ? SIDE_BAR_MOBILE_ANCHOR : SIDE_BAR_DESKTOP_ANCHOR}
          open={sidebarOpen}
          variant={sidebarVariant}
          items={SIDE_BAR_ITEMS}
          onClose={onSideBarClose}
        />
      </Stack>

      <Stack
        component="main"
        sx={{
          flexGrow: 1,
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
        }}
      >
        <ErrorBoundary name="Content">{<Outlet />}</ErrorBoundary>
      </Stack>
    </Stack>
  );
};

export default PrivateLayout;
