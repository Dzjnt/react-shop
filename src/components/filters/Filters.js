import React from "react";
import CategoryFilter from "./CategoryFilter";
import NameFilter from "./NameFilter";
import PriceFilter from "./PriceFilter";

const Filters = () => {
  return (
    <>
      <NameFilter />
      <PriceFilter />
      <CategoryFilter />
    </>
  );
};

export default Filters;
