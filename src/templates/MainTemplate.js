import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";

import Cart from "../components/Cart";
import Navbar from "../components/navigations/Navbar";
import { materialTheme } from "../themes/materialTheme";

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={materialTheme}>
      <Navbar />
      <Cart />
      {children}
    </ThemeProvider>
  );
};

export default MainTemplate;
