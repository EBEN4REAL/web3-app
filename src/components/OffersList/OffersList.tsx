import React from "react";
import {
  Box,
  TableHead,
  TableRow,
  TableBody,
  Tooltip,
  useTheme,
} from "@mui/material";
import { motion, Variants } from "framer-motion";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Text2 from "../text/Text2";
import { columns, tableData } from "./OffersList.constants";
import {
  StyledIconButton,
  StyledTable,
  StyledTableCellBody,
  StyledTableCellHead,
} from "./OffersList.styles";

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const getRowBg = (i: number, darkMode: boolean) =>
  i % 2 === 0
    ? darkMode
      ? "#2a2a2a"
      : "#ffffff"
    : darkMode
    ? "#1f1f1f"
    : "#f4f9f9";

const OffersList: React.FC = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Box sx={{ overflowX: "auto" }}>
      <StyledTable aria-label="offers table">
        <TableHead>
          <TableRow sx={{ background: darkMode ? "#1e1e1e" : "#f9fbfc" }}>
            {columns.map((heading) => (
              <StyledTableCellHead align="center" key={heading}>
                <Text2>{heading}</Text2>
              </StyledTableCellHead>
            ))}
          </TableRow>
        </TableHead>

        <TableBody component={motion.tbody} initial="hidden">
          {tableData.map((row, index) => {
            const bgColor = getRowBg(index, darkMode);
            return (
              <motion.tr
                key={row.id}
                custom={index}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileTap={{ scale: 0.98 }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: darkMode
                    ? "0 4px 20px rgba(255,255,255,0.05)"
                    : "0 4px 20px rgba(0,0,0,0.08)",
                }}
                style={{ display: "table-row" }}
              >
                {[
                  row.id,
                  row.offerToken,
                  row.buyerToken,
                  row.rateOfReturn,
                  row.offerYield,
                  row.percentDiff,
                  row.officialPrice,
                  row.askedPrice,
                  row.diffPrice,
                  row.stock,
                ].map((val, i) => (
                  <StyledTableCellBody
                    key={i}
                    align="center"
                    $bgColor={bgColor}
                  >
                    {val}
                  </StyledTableCellBody>
                ))}

                <StyledTableCellBody align="center" $bgColor={bgColor}>
                  <Tooltip title="Add to cart">
                    <StyledIconButton>
                      <ShoppingCartOutlinedIcon />
                    </StyledIconButton>
                  </Tooltip>
                </StyledTableCellBody>

                <StyledTableCellBody align="center" $bgColor={bgColor}>
                  <Tooltip title="View details">
                    <StyledIconButton>
                      <RemoveRedEyeOutlinedIcon />
                    </StyledIconButton>
                  </Tooltip>
                </StyledTableCellBody>
              </motion.tr>
            );
          })}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default OffersList;
