import { Box, styled, SxProps, Theme } from "@mui/material";

export const headerBoxSx: SxProps<Theme> = (theme) => ({
  position: "relative",
  overflow: "hidden",
  zIndex: 1300,
  py: {
    xs: 0, 
    md: 6,
    lg: 8,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/Flux_Dev_Create_a_highresolution_sleek_and_modern_digital_artw_2.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    animation: "headerBackgroundZoomPan 20s ease-in-out infinite",
    zIndex: -1,
  },
});



export const Navbar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "100px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(10),
  },
}));

