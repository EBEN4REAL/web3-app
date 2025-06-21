import React, { FC } from "react";
import { Box } from "@mui/material";
import { FooterLogo } from "../logo/FooterLogo";
import {
  footerWrapperSx,
  footerContentSx,
  helpButtonSx,
} from "./Footer.styles";

const Footer: FC = () => {
  return (
    <Box component="footer" sx={footerWrapperSx}>
        <Box sx={footerContentSx}>
          <FooterLogo />
          <Box sx={helpButtonSx}>HELP</Box>
        </Box>
    </Box>
  );
};

export default Footer;
