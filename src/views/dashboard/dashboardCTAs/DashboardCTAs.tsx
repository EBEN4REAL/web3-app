import { motion } from "framer-motion";
import { itemVariants } from "../../../common/framer-motion/constants";
import { actionButtonWrapperSx } from "../Dashboard.styles"
import { Box } from "@mui/material";
import { buttonConfigs, containerVariants } from "../Dashboard.constants";
import AppButton from "../../../components/button/Button";

const DashboardCTAs = () => {
  return (
    <>
      <Box
        sx={actionButtonWrapperSx}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
         {buttonConfigs.map(({ label, variantType }, index) => (
            <motion.div
              key={label}
              custom={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AppButton variantType={variantType}>{label}</AppButton>
            </motion.div>
          ))}
      </Box>
    </>
  )
}

export default DashboardCTAs;