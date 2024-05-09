import { PaletteOptions, SimplePaletteColorOptions } from "@mui/material";

const COLOR_PRIMARY: SimplePaletteColorOptions = {
  main: "#64B5F6",
  contrastText: "#000000",
};

const COLOR_SECONDARY: SimplePaletteColorOptions = {
  main: "#EF9A9A",
  contrastText: "#000000",
};

export const PALETTE_COLORS: Partial<PaletteOptions> = {
  primary: COLOR_PRIMARY,
  secondary: COLOR_SECONDARY,
};
