//Author: Hatim Patrawala

import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

import { Alert, Button, Link, AppView } from "components";

const NotFound = () => {
  const navigate = useNavigate();

  const onClose = () => {
    navigate("/", { replace: true });
  };

  return (
    <AppView>
      <Typography variant="h3">Page not found!</Typography>
      <Typography variant="body1">
        Requested address is unknown, please check your URL or go to the{" "}
        <Link to="/">home page</Link>.
      </Typography>
      <Alert severity="error" onClose={onClose}>
        Error 404 - Page not found
      </Alert>
      <Stack direction="row" justifyContent="center">
        <Button onClick={onClose}>Go to Home Page</Button>
      </Stack>
    </AppView>
  );
};

export default NotFound;
