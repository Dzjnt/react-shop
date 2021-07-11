import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import MainTemplate from "../templates/MainTemplate";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Products from "../views/Products";
import SingleProduct from "../views/SingleProduct";

const Router = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.products} component={Products} />
          <Route path={routes.singleProduct} component={SingleProduct} />
          <Route path={routes.contact} component={Contact} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Router;
