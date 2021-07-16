import React from "react";
import Filters from "../componets/filters/Filters";
import ProductsList from "../componets/products/ProductsList";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Filters />
      <ProductsList />
    </div>
  );
};

export default Products;
