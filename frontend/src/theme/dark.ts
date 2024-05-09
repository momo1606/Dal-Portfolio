import { ThemeOptions } from "@mui/material";
import { PALETTE_COLORS } from "./colors";

export const DARK_THEME: ThemeOptions = {
  palette: {
    mode: "dark",
    ...PALETTE_COLORS,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        sx: {
          color: "#000",
          fontWeight: "700",
          backgroundColor: "#fcd405",
          "&:hover": {
            opacity: 0.9,
            backgroundColor: "#FFD801",
          }
        }
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

export default DARK_THEME;