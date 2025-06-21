import { SxProps, Theme } from "@mui/material";

export const footerWrapperSx: SxProps<Theme> = {
  background: "linear-gradient(to bottom, #173039, #00b4c9)",
  py: 4,
};

export const footerContainerSx: SxProps<Theme> = {
  maxWidth: "1400px",
};

export const footerContentSx: SxProps<Theme> = (theme) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    textAlign: "left",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const helpButtonSx: SxProps<Theme> = {
  width: { xs: "90%", sm: "324px" },
  height: "45px",
  borderRadius: "6px",
  backgroundColor: "#fff",
  color: "#00c1c9",
  fontSize: "30px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mr: { xs: 0, sm: 0, md: 2 },
};
