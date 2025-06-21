import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Navigation } from "../navigation";
import { useTheme } from "@mui/material/styles";
import { Menu, Close } from "@mui/icons-material";
import { headerBoxSx, Navbar } from "./header.styles";
import Banner from "./Banner/Banner";
import { Logo } from "../logo/Logo";

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const { breakpoints } = useTheme();

  const matchMobileView = useMediaQuery(breakpoints.down("lg"));
  return (
    <Box sx={headerBoxSx}>
      <Box>
        <Container
          sx={{
            [breakpoints.up("sm")]: {
              maxWidth: "1400px",
            },
          }}
        >
          <Navbar>
            <Logo />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: { xs: "column", lg: "row" },
                transition: (theme) => theme.transitions.create(["top"]),
                ...(matchMobileView && {
                  backgroundColor: "background.paper",
                  zIndex: "appBar",
                  position: "fixed",
                  height: { xs: "100vh", lg: "auto" },
                  top: visibleMenu ? 0 : "-120vh",
                  left: 0,
                }),
              }}
            >
              <Navigation />
              {matchMobileView && (
                <IconButton
                  sx={{
                    position: "fixed",
                    top: 10,
                    right: 10,
                    zIndex: 3000,
                    backgroundColor: "background.paper",
                    color: "text.primary",
                    boxShadow: 3,
                    borderRadius: "50%",
                    p: 1.2,
                  }}
                  onClick={() => setVisibleMenu(!visibleMenu)}
                >
                  {visibleMenu ? <Close /> : <Menu />}
                </IconButton>
              )}
            </Box>
          </Navbar>
        </Container>
      </Box>
      <Banner />
    </Box>
  );
};

export default Header;
