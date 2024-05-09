import { useMediaQuery, useTheme } from "@mui/material";

export const useOnMobileByMediaQuery = (
  size: "xs" | "sm" | "md" | "lg" | "xl"
) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(size));
};

export const useOnMobile = () => useOnMobileByMediaQuery("sm");

export const useOnTablets = () => useOnMobileByMediaQuery("md");
