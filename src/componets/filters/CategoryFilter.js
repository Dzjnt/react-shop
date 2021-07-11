import React, { useContext } from "react";
import ShopContext from "../../context";

const CategoryFilter = () => {
  const context = useContext(ShopContext);
  const { initialproducts, category, handleCategorySelectChange } = context;

  const categoriesList = [
    "all",
    ...new Set(initialproducts.map((product) => product.category)),
  ];
  console.log(categoriesList);

  return (
    <>
      <select value={category} onChange={handleCategorySelectChange}>
        {categoriesList.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
    </>
  );
};

export default CategoryFilter;
