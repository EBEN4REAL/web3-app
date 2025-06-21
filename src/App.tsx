import React from "react";
import "./App.css";
import "./assets/css/globals.css";
import {  ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import Router from "./routes/Router";
import theme from "./theme";


function App() {
  const routing = useRoutes(Router);
  return (
    <ThemeProvider theme={theme}>
        <div className="App">{routing}</div>
    </ThemeProvider>
  );
}

export default App;
