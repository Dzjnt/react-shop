import React, { useContext } from "react";
import ShopContext from "../context";
import ProductListItem from "./ProductListItem";

const ProductsList = () => {
  const context = useContext(ShopContext);
  const { products } = context;

  return (
    <ul>
      {products.map((product) => (
        <ProductListItem {...product} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
