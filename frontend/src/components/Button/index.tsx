import { Button as MuiButton, ButtonProps, useTheme } from "@mui/material";
import { ElementType, FC, ReactNode, useMemo } from "react";

import Icon from "components/Icon";
import Link from "components/Link";
// import { APP_BUTTON_VARIANT } from "components/config";

// const MUI_BUTTON_COLORS = [
//   "inherit",
//   "primary",
//   "secondary",
//   "success",
//   "error",
//   "info",
//   "warning",
// ];

const DEFAULT_SX_VALUES = {
  margin: 1,
};

export interface AppButtonProps
  extends Omit<ButtonProps, "sx" | "endIcon" | "startIcon"> {
  endIcon?: string | ReactNode;
  label?: string;
  text?: string;
  startIcon?: string | ReactNode;
  component?: ElementType;
  to?: string;
  href?: string;
  openInNewTab?: boolean;
  underline?: "none" | "hover" | "always";
  sx?: any;
}

const Button: FC<AppButtonProps> = ({
  children,
  component: propComponent,
  endIcon,
  label,
  startIcon,
  sx: propSx = DEFAULT_SX_VALUES,
  text,
  underline = "none",
  variant,
  ...restOfProps
}) => {
  const theme = useTheme();
  const iconStart: ReactNode = useMemo(
    () =>
      !startIcon ? undefined : typeof startIcon === "string" ? (
        <Icon name={String(startIcon)} />
      ) : (
        startIcon
      ),
    [startIcon]
  );

  const iconEnd: ReactNode = useMemo(
    () =>
      !endIcon ? undefined : typeof endIcon === "string" ? (
        <Icon name={String(endIcon)} />
      ) : (
        endIcon
      ),
    [endIcon]
  );

  const componentToRender =
    !propComponent && (restOfProps?.href || restOfProps?.to)
      ? Link
      : propComponent ?? MuiButton;

  return (
    <MuiButton
      component={componentToRender}
      endIcon={iconEnd}
      startIcon={iconStart}
      sx={{
        ...(theme?.components?.MuiButton?.defaultProps?.sx || {}),
        ...(propSx || {}),
      }}
      {...{ ...restOfProps, underline }}
      {...(variant && { variant: variant })}
    >
      {children || label || text}
    </MuiButton>
  );
};

export default Button;
