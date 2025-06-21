import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Switch,
} from "@mui/material";
import { motion, Variants } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import OffersList from "../../components/OffersList/OffersList";

const ImprovedDashboard = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/network-img-1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: 10,
        }}
      >
        <Box
          sx={{ maxWidth: 1400, mx: "auto", px: 4, textAlign: "left" }}
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" color="white" fontWeight={700} gutterBottom>
            Explore Offers
          </Typography>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Box
              sx={{
                background: "rgba(255,255,255,0.2)",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 1,
                mt: 2,
                width: "100%",
                maxWidth: 500,
              }}
            >
              <SearchIcon sx={{ color: "white" }} />
              <input
                placeholder="Search for offers..."
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "white",
                  marginLeft: 10,
                  width: "100%",
                }}
              />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Box sx={{ mt: 3, display: "flex", alignItems: "center" }}>
              <Typography color="white" mr={2}>
                Show Whitelisted Only
              </Typography>
              <Switch defaultChecked color="info" />
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mt: -4,
          zIndex: 2,
          position: "relative",
        }}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {["Sell", "Buy", "Exchange"].map((label, i) => (
          <motion.div
            key={label}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: ["#00dbe3", "#23a2bb", "#173039"][i],
                width: 180,
                height: 56,
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              {label}
            </Button>
          </motion.div>
        ))}
      </Box>

      {/* Table Section */}
      <Box
        sx={{ maxWidth: 1400, mx: "auto", px: 2, py: 8 }}
        component={motion.div}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <OffersList />
      </Box>
    </Box>
  );
};

export default ImprovedDashboard;
