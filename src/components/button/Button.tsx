import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface AppButtonProps extends ButtonProps {
  variantType?: "primary" | "secondary" | "tertiary";
}

const variantColors: Record<string, string> = {
  primary: "#00dbe3",
  secondary: "#23a2bb",
  tertiary: "#173039",
};

const AppButton: React.FC<AppButtonProps> = ({
  variantType = "primary",
  sx,
  children,
  ...rest
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: variantColors[variantType],
        width: 180,
        height: 56,
        fontWeight: 600,
        fontSize: 16,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default AppButton;
