import React from "react";
import Filters from "../components/filters/Filters";
import ProductsList from "../components/products/ProductsList";

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
