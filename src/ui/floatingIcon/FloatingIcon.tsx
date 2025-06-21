import React from "react";
import { motion } from "framer-motion";
import { Box, SxProps, Theme } from "@mui/material";

interface FloatingIconProps {
  src: string;
  sx?: SxProps<Theme>;
  delay?: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ src, sx, delay = 0 }) => {
  return (
    <Box
      component={motion.img}
      src={src}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      sx={{
        position: "absolute",
        width: 40,
        height: 40,
        opacity: 0.2,
        zIndex: 0,
        ...sx,
      }}
    />
  );
};

export default FloatingIcon;
