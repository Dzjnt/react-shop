import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import ShopContext from "../../context";
import ProductListItem from "./product/ProductListItem";

import useStyles from "./styles/styles";

const ProductsList = () => {
  const context = useContext(ShopContext);
  const { products } = context;
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <ProductListItem {...product} product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default ProductsList;
