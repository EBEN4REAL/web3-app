import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { OffersList } from "../../components/OffersList";
import {
  tableContainerSx,
} from "./Dashboard.styles";
import { containerVariants } from "./Dashboard.constants";
import DashboardCTAs from "./dashboardCTAs/DashboardCTAs";

const Dashboard = () => {
  return (
    <>
      <DashboardCTAs />
      <Box
        sx={tableContainerSx}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <OffersList />
      </Box>
    </>
  );
};

export default Dashboard;
