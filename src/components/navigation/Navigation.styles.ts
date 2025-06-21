import { Box, styled, SxProps, Theme } from "@mui/material";


export const navItemStyles = (
  isActive: boolean,
  isHome: boolean
): SxProps<Theme> => (theme) => ({
  display: "inline-flex",
  position: "relative",
  color: isActive
    ? theme.palette.text.primary
    : isHome
    ? theme.palette.primary.main
    : theme.palette.common.white,
  lineHeight: "30px",
  letterSpacing: "3px",
  cursor: "pointer",
  textDecoration: "none",
  textTransform: "uppercase",
  fontWeight: 700,
  alignItems: "center",
  justifyContent: "center",
  px: 1,
  fontSize: "16px",

  "& > .curve-icon": {
    display: isActive ? "block" : "none",
  },

  "&:hover": {
    color: theme.palette.text.disabled,
  },

  [theme.breakpoints.down("md")]: {
    color: theme.palette.common.black,
  },
});

export const curveIconSx: SxProps<Theme> = {
  position: "absolute",
  top: 12,
  transform: "rotate(3deg)",
  "& img": {
    width: 44,
    height: "auto",
  },
};


export const NavigationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(2),
  flexDirection: "row",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    background: theme.palette.common.white,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: theme.spacing(2),
  },
}));

