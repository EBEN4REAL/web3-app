import { styled } from "@mui/material/styles";

export const StyledLogo = styled("img")(({ theme }) => ({
  height: "80px",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    height: "50px",
  },
}));
