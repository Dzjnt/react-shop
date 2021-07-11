import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";

import Cart from "../componets/Cart";
import Navbar from "../componets/navigations/Navbar";
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
