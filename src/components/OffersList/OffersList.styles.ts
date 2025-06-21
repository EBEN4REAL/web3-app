import {
  Table,
  TableCell,
  styled,
  IconButton
} from "@mui/material";

export const StyledTable = styled(Table)(({ theme }) => ({
  borderCollapse: "separate",
  borderSpacing: "0 10px",
  width: "100%",
}));

export const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#ccc" : "#333",
  fontWeight: 700,
  fontSize: "13px",
  textTransform: "uppercase",
  borderBottom: "none",
}));

export const StyledTableCellBody = styled(TableCell)<{ $bgColor: string }>(({ $bgColor, theme }) => ({
  backgroundColor: $bgColor,
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#333" : "#e0f7fa",
  fontSize: "13px",
  fontWeight: 500,
  color: theme.palette.mode === "dark" ? "#ddd" : "#111",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#00e1ef" : "#00c9d7",
  transition: "0.3s",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#008ca1" : "#007c91",
  },
}));