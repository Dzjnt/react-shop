import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../../../context";
import { routes } from "../../../routes";
import useStyles from "./styles";

const ProductListItem = ({ id, name, image, price, product }) => {
  const context = useContext(ShopContext);
  const { addProductToCart, increaseProductInCartQuantity } = context;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <Link
          to={{
            pathname: `/products/${name}`,
            state: {
              ...product,
            },
          }}
        ></Link>
        <Typography variant="body2" color="textSecondary">
          {name}
        </Typography>
        <Typography variant="h5">{price} zł</Typography>
      </CardContent>
      <CardActions
        onClick={() => {
          increaseProductInCartQuantity(id);
          addProductToCart(id);
        }}
      >
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductListItem;
