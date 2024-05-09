import { FC } from "react";
import MuiAlert, { AlertProps as MuiAlertProps } from "@mui/material/Alert";

import { APP_ALERT_SEVERITY, APP_ALERT_VARIANT } from "components/config";

const Alert: FC<MuiAlertProps> = ({
  severity = APP_ALERT_SEVERITY,
  variant = APP_ALERT_VARIANT,
  onClose,
  ...restOfProps
}) => {
  return (
    <MuiAlert
      severity={severity}
      sx={{ marginY: 1 }}
      variant={variant}
      onClose={onClose}
      {...restOfProps}
    />
  );
};

export default Alert;
