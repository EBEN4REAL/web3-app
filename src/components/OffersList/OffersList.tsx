import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { motion, Variants } from "framer-motion";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Text2 from "../text/Text2"; // Update the path based on your project structure

// Sample data for the table rows
const tableData = [
  {
    id: 371,
    offerToken: "Token 1",
    buyerToken: "USDC",
    rateOfReturn: "10%",
    offerYield: "12%",
    percentDiff: "20%",
    officialPrice: "$51.35",
    askedPrice: "$60.00",
    diffPrice: "$16.85%",
    stock: "12.28838",
  },
  {
    id: 372,
    offerToken: "Token 2",
    buyerToken: "USDT",
    rateOfReturn: "15%",
    offerYield: "18%",
    percentDiff: "25%",
    officialPrice: "$45.00",
    askedPrice: "$55.00",
    diffPrice: "$10.00%",
    stock: "8.1256",
  },
];

// Variants for row animation
const rowVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.5,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const OffersList: React.FC = () => {
  return (
    <Box sx={{ overflowX: "auto" }}>
      <Table
        aria-label="animated table"
        sx={{
          borderCollapse: "unset",
          whiteSpace: "nowrap",
          borderRadius: "8px",
          border: "2px solid #00dbe3",
        }}
      >
        <TableHead sx={{ background: "#f3f3f3" }}>
          <TableRow>
            {[
              "Offer ID",
              "Offer Token",
              "Buyer Token",
              "Rate of Return",
              "Offer Yield",
              "% Difference",
              "Official Price",
              "Asked Price",
              "% Diff Price",
              "Stock",
              "Cart",
              "View",
            ].map((heading) => (
              <TableCell key={heading} align="center">
                <Text2>{heading}</Text2>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <motion.tbody initial="hidden" animate="visible">
          {tableData.map((row, index) => (
            <motion.tr
              key={row.id}
              variants={rowVariants}
              custom={index}
              style={{ display: "table-row" }}
            >
              <TableCell align="center">{row.id}</TableCell>
              <TableCell>{row.offerToken}</TableCell>
              <TableCell>{row.buyerToken}</TableCell>
              <TableCell align="center">{row.rateOfReturn}</TableCell>
              <TableCell align="center">{row.offerYield}</TableCell>
              <TableCell align="center">{row.percentDiff}</TableCell>
              <TableCell align="center">{row.officialPrice}</TableCell>
              <TableCell align="center">{row.askedPrice}</TableCell>
              <TableCell align="center">{row.diffPrice}</TableCell>
              <TableCell align="center">{row.stock}</TableCell>
              <TableCell align="center">
                <IconButton>
                  <ShoppingCartOutlinedIcon sx={{ color: "#00dbe3" }} />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton>
                  <RemoveRedEyeOutlinedIcon sx={{ color: "#00dbe3" }} />
                </IconButton>
              </TableCell>
            </motion.tr>
          ))}
        </motion.tbody>
      </Table>
    </Box>
  );
};

export default OffersList;
