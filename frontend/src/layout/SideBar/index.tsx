import { FC, useCallback, MouseEvent } from "react";
import {
  Stack,
  Divider,
  Drawer,
  DrawerProps,
  FormControlLabel,
  Switch,
  Tooltip,
} from "@mui/material";

import { useAppStore } from "store";
import { IconButton } from "components";
import { LinkToPage } from "utils/type";
import SideBarNavList from "./SideBarNavList";
import {
  useEventLogout,
  useSwitchMode,
  useIsAuthenticated,
  useOnMobile,
} from "hooks";
import { SIDE_BAR_WIDTH, TOP_BAR_DESKTOP_HEIGHT } from "layout/config";

interface Props
  extends Pick<
    DrawerProps,
    "anchor" | "className" | "open" | "variant" | "onClose"
  > {
  items: Array<LinkToPage>;
}

const SideBar: FC<Props> = ({
  anchor,
  open,
  variant,
  items,
  onClose,
  ...restOfProps
}) => {
  const [state] = useAppStore();
  const isAuthenticated = useIsAuthenticated();
  const onMobile = useOnMobile();

  const switchMode = useSwitchMode();
  const onLogout = useEventLogout();

  const handleAfterLinkClick = useCallback(
    (event: MouseEvent) => {
      if (variant === "temporary" && typeof onClose === "function") {
        onClose(event, "backdropClick");
      }
    },
    [variant, onClose]
  );

  return (
    <Drawer
      anchor={anchor}
      open={open}
      variant={variant}
      PaperProps={{
        sx: {
          width: SIDE_BAR_WIDTH,
          marginTop: onMobile
            ? 0
            : variant === "temporary"
              ? 0
              : TOP_BAR_DESKTOP_HEIGHT,
          height: onMobile
            ? "100%"
            : variant === "temporary"
              ? "100%"
              : `calc(100% - ${TOP_BAR_DESKTOP_HEIGHT})`,
        },
      }}
      onClose={onClose}
    >
      <Stack
        sx={{
          height: "100%",
          padding: 2,
        }}
        {...restOfProps}
        onClick={handleAfterLinkClick}
      >
        {isAuthenticated && <Divider />}

        <SideBarNavList items={items} showIcons />

        <Divider />

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <Tooltip
            title={
              state.darkMode ? "Switch to Light mode" : "Switch to Dark mode"
            }
          >
            <FormControlLabel
              label={!state.darkMode ? "Light mode" : "Dark mode"}
              control={
                <Switch checked={state.darkMode} onChange={switchMode} />
              }
            />
          </Tooltip>

          {isAuthenticated && (
            <IconButton
              icon="logout"
              title="Logout Current User"
              onClick={onLogout}
            />
          )}
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default SideBar;
