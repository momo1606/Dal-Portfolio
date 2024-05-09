//Author: Hatim Patrawala

import React, { useEffect, useLayoutEffect } from "react";
import { Box, Container, Tab, Tabs } from "@mui/material";

import Header from "pages/Profile/Header";
import Portfolio from "pages/Profile/Portfolio";
import Settings from "pages/Profile/Settings";
import { useOnMobile, useOnTablets } from "hooks";
import { GET } from "utils/axios";
import { isEmpty } from "utils/helpers";
import { useAppStore } from "store";
import { MyCollabRequests } from "pages/Collaboration";

type Props = {};

const Profile = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState<Number>(0);
  const [state, dispatch] = useAppStore();
  const { currentUser = {} }: any = state || {};
  const onMobile = useOnMobile();
  const onTablet = useOnTablets();

  const [user, setUser] = React.useState<any>({});


  useEffect(() => {
    isEmpty(user) && fetchUser();
  }, []);

  const fetchUser = async () => {
    if (isEmpty(currentUser)) return;
    GET(`/api/profile/user/${currentUser?._id}`).then((res) => {
      setUser(res.data.user);
    });
  };

  const profileTabs = [
    {
      label: "Portfolio",
      value: 0,
    },
    {
      label: "Collab Requests",
      value: 1,
    }
  ];
  return (
    <Container
      sx={{
        width: "100%",
      }}
    >
      <Header user={user} refresh={fetchUser} />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          ...(onMobile
            ? {
                flexDirection: "column",
              }
            : {
                flexGrow: 1,
              }),
        }}
      >
        <Tabs
          orientation={onMobile ? "horizontal" : "vertical"}
          variant="standard"
          value={activeTab}
          onChange={(e: any, value: Number) => setActiveTab(value)}
          aria-label="Profile Side Bar"
          sx={{
            ...(!onMobile && {
              borderRight: 1,
              borderColor: "divider",
            }),
            width: onMobile ? "100%" : onTablet ? "150px" : "250px",
          }}
        >
          {profileTabs.map((tab, index) => (
            <Tab key={index} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
        <Box sx={{ marginTop: onMobile ? 1 : 0, width: "100%" }}>
          {activeTab === 0 && <Portfolio />}
          {activeTab === 1 && <MyCollabRequests/>}
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
