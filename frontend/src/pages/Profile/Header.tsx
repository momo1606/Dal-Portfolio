//Author: Hatim Patrawala

import { Fragment, useState } from "react";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";

import UserEditModal from "pages/Profile/UserEditModal";
import { Icon } from "components";
import { useOnMobile } from "hooks";

interface Props {
  user: any;
  refresh: Function;
}

const Header = ({ user, refresh }: Props) => {
  const { username, email } = user;
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const onMobile = useOnMobile();
  return (
    <Fragment>
      <UserEditModal
        user={user}
        isOpen={showEditModal}
        handleClose={() => setShowEditModal(false)}
        onSave={refresh}
      />
      <Box
        sx={{
          marginTop: 1,
          borderRadius: 3,
          width: "100%",
          height: "200px",
          bgcolor: "#F1F1F1",
          position: "relative",
          backgroundColor: "#FBAB7E",
          backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
          color: "grey.700",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"left"}
              sx={{ padding: "15px" }}
              alignItems={"start"}
            >
              <Avatar
                sx={{
                  width: "70px",
                  height: "70px",
                  border: "1px solid #fff",
                }}
              />
              <Box>
                <Typography variant="h6">{username}</Typography>
                <Typography>{email}</Typography>
              </Box>
            </Stack>

            <Stack
              display={"inline"}
              direction={"row"}
              spacing={3}
              justifyContent={"right"}
              sx={{ padding: "15px" }}
            >
              <IconButton onClick={() => setShowEditModal(true)}>
                <Icon name="edit" />
              </IconButton>
              {!onMobile && (
                <IconButton onClick={() => {}}>
                  <Icon name="logout" />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Header;
