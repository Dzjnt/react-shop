import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../context";
import { routes } from "../routes";

const ProductListItem = ({ id, name, image, price, product }) => {
  const context = useContext(ShopContext);
  const { addProductToCart, increaseProductInCartQuantity } = context;

  return (
    <li key={id}>
      <Link
        to={{
          pathname: `/products/${name}`,
          state: {
            ...product,
          },
        }}
      >
        <img src={image} alt={name} />
      </Link>
      <h3>{name}</h3>
      <p>{price} zł</p>
      <button
        onClick={() => {
          increaseProductInCartQuantity(id);
          addProductToCart(id);
        }}
      >
        dodaj do koszyka
      </button>
    </li>
  );
};

export default ProductListItem;
