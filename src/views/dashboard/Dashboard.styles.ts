import { SxProps, Theme } from "@mui/material";

export const actionButtonWrapperSx: SxProps<Theme> = (theme) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  justifyContent: "center",
  alignItems: "center",
  mt: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(-3),
    position: "relative",
    zIndex: 9999
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
    marginTop: theme.spacing(2),
  },
});


export const tableContainerSx: SxProps<Theme> = {
  maxWidth: 1400,
  mx: "auto",
  px: 2,
  py: 8,
};
