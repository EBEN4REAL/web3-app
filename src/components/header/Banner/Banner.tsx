import React, { FC } from "react";
import Box from "@mui/material/Box";
import { Typography, Switch } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";

import {
  bannerWrapperSx,
  contentWrapperSx,
  searchBoxSx,
  inputSx,
  filterBoxSx,
} from "./Banner.styles";
import { itemVariants } from "../../../common/framer-motion/constants";
import { animatedGradientTextSx } from "./Banner.styles";
import FloatingIcon from "../../../ui/floatingIcon/FloatingIcon";
import { floatingIcons } from "../../../ui/floatingIcon/floatingIcons.constants";

const Banner: FC = () => {
  return (
    <Box sx={bannerWrapperSx}>
      <motion.div
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Box sx={contentWrapperSx}>
          <Typography
            variant="h3"
            color="white"
            fontWeight={700}
            sx={animatedGradientTextSx}
            gutterBottom
          >
            Explore Offers
          </Typography>

          <Box
            sx={searchBoxSx}
            component={motion.div}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SearchIcon sx={{ color: (theme) => theme.palette.common.white }} />
            <input placeholder="Search for offers..." style={inputSx} />
          </Box>
          <Box
            sx={filterBoxSx}
            component={motion.div}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Typography color="white" mr={2}>
              Show Whitelisted Only
            </Typography>
            <Switch defaultChecked color="info" />
          </Box>
        </Box>
      </motion.div>
      {floatingIcons.map(({ src, top, left, delay }, idx) => (
        <FloatingIcon key={idx} src={src} sx={{ top, left }} delay={delay} />
      ))}
    </Box>
  );
};

export default Banner;
