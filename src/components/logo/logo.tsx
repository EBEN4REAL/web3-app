import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledLogo } from "./Logo.styles";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <StyledLogo
      src="/images/lock-logo.png"
      alt="logo"
      onClick={() => navigate("/")}
    />
  );
};
