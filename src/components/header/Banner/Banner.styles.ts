import { SxProps, Theme } from "@mui/material";


export const animatedGradientTextSx = {
  background: "linear-gradient(90deg, #00dbe3, #23a2bb, #173039)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradientMove 3s linear infinite",
  fontWeight: 700,
  display: "inline-block",
  "@keyframes gradientMove": {
    "0%": { backgroundPosition: "0% center" },
    "100%": { backgroundPosition: "-200% center" },
  },
};

export const bannerWrapperSx: SxProps<Theme> = {
  py: 10,
  position: "relative",
};


export const contentWrapperSx: SxProps<Theme> = {
  maxWidth: 1400,
  mx: "auto",
  px: 4,
  textAlign: "left",
};

export const searchBoxSx: SxProps<Theme> = {
  background: "rgba(255,255,255,0.1)",
  borderRadius: 2,
  display: "flex",
  alignItems: "center",
  px: 2,
  py: 1,
  mt: 2,
  maxWidth: 500,
};

export const inputSx: React.CSSProperties = {
  background: "transparent",
  border: "none",
  outline: "none",
  color: "white",
  marginLeft: 10,
  width: "100%",
};

export const filterBoxSx: SxProps<Theme> = {
  mt: 3,
  display: "flex",
  alignItems: "center",
};
