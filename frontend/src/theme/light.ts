import { ThemeOptions } from "@mui/material";
import { PALETTE_COLORS } from "./colors";

export const LIGHT_THEME: ThemeOptions = {
  palette: {
    mode: "light",
    ...PALETTE_COLORS,
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "warning",
        size: "small",
        variant: "contained",
        sx: {
          color: "#000",
          fontWeight: "700",
          backgroundColor: "#fcd405",
          "&:hover": {
            opacity: 0.8,
            backgroundColor: "#fcd405",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#fcd405",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#fcd405",
        }
      },
    },
  },
};

export default LIGHT_THEME;
