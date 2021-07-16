import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import ShopContext from "../../context";
import { routes } from "../../routes";

import logo from "../../assets/images/avocado-logo.png";
import useStyles from "./styles/styles";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const Navbar = () => {
  const context = useContext(ShopContext);
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Keto-Shop"
              height="50px"
              width="50px"
              className={classes.image}
            />{" "}
            Keto-Shop
          </Typography>
          <Button href={routes.home}>Home</Button>
          <Button href={routes.products}>Products</Button>
          <Button onClick={context.handleCartOpen}>cart</Button>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={0} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
