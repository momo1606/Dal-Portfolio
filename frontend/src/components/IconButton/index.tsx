import { ElementType, FC, useMemo } from "react";
import {
  alpha,
  Tooltip,
  IconButton as MuiIconButton,
  IconButtonProps,
} from "@mui/material";

import Icon from "components/Icon";
import Link from "components/Link";

export const MUI_ICON_BUTTON_COLORS = [
  "inherit",
  "default",
  "primary",
  "secondary",
  "success",
  "error",
  "info",
  "warning",
];

interface Props extends Omit<IconButtonProps, "color"> {
  color?: string;
  icon?: string;
  component?: ElementType;
  to?: string;
  href?: string;
  openInNewTab?: boolean;
}

const IconButton: FC<Props> = ({
  color = "default",
  component,
  children,
  disabled,
  icon,
  sx,
  title,
  ...restOfProps
}) => {
  const componentToRender =
    !component && (restOfProps?.href || restOfProps?.to)
      ? Link
      : component ?? MuiIconButton;

  const isMuiColor = useMemo(
    () => MUI_ICON_BUTTON_COLORS.includes(color),
    [color]
  );

  const IconButtonToRender = useMemo(() => {
    const colorToRender = isMuiColor
      ? (color as IconButtonProps["color"])
      : "default";
    const sxToRender = {
      ...sx,
      ...(isMuiColor
        ? {}
        : {
            color: color,
            ":hover": {
              backgroundColor: alpha(color, 0.04),
            },
          }),
    };
    return (
      <MuiIconButton
        component={componentToRender}
        color={colorToRender}
        disabled={disabled}
        sx={sxToRender}
        {...restOfProps}
      >
        <Icon name={icon} />
        {children}
      </MuiIconButton>
    );
  }, [
    color,
    componentToRender,
    children,
    disabled,
    icon,
    isMuiColor,
    sx,
    restOfProps,
  ]);

  return title && !disabled ? (
    <Tooltip title={title}>{IconButtonToRender}</Tooltip>
  ) : (
    IconButtonToRender
  );
};

export default IconButton;
