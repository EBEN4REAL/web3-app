import React from "react";
import { Box } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { navigations } from "./navigation.data";
import { useAccount } from "wagmi";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import AppButton from "../button/Button";
import { curveIconSx, NavigationContainer, navItemStyles } from "./Navigation.styles";

const NavigationMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { isConnected: isWalletConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  return (
    <>
      <NavigationContainer>
        {navigations.map(({ path, label }) => {
          const isActive = currentPath === path;
          const isHome = path === "/";
          return (
            <Box
              key={label}
              component={NavLink}
              to={path}
              sx={navItemStyles(isActive, isHome)}
            >
              <Box className="curve-icon" sx={curveIconSx}>
                <img src="/images/headline-curve.svg" alt={`${label} curve`} />
              </Box>
              {label}
            </Box>
          );
        })}
        <Box sx={{ ml: "auto" }}>
          {!isWalletConnected ? (
            <AppButton
              variantType="primary"
              onClick={() => openConnectModal?.()}
            >
              Connect Wallet
            </AppButton>
          ) : (
            <ConnectButton />
          )}
        </Box>
      </NavigationContainer>
    </>
  );
};

export default NavigationMenu;