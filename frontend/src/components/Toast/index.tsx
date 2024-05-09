import React from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { useToast } from "hooks";
import {
  APP_SNACKBAR_ANCHOR_ORIGIN_HORIZONTAL,
  APP_SNACKBAR_ANCHOR_ORIGIN_VERTICAL,
  APP_SNACKBAR_AUTO_HIDE_DURATION,
} from "components/config";

const Alert = React.forwardRef(function Alert(props: any, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = () => {
  const { open, message, severity, hideToast } = useToast();

  const handleClose = (event: any, reason: string) => {
    if (reason === "clickaway") {
      return;
    }
    hideToast();
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        horizontal: APP_SNACKBAR_ANCHOR_ORIGIN_HORIZONTAL,
        vertical: APP_SNACKBAR_ANCHOR_ORIGIN_VERTICAL,
      }}
      autoHideDuration={APP_SNACKBAR_AUTO_HIDE_DURATION}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
