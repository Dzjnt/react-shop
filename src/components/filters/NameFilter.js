import { TextField } from "@material-ui/core";
import React, { useContext } from "react";
import ShopContext from "../../context";

const NameFilter = () => {
  const context = useContext(ShopContext);
  const { nameInput, handleProductNameInputChange } = context;

  return (
    <TextField
      type="text"
      label="search product..."
      value={nameInput}
      onChange={handleProductNameInputChange}
    />
  );
};

export default NameFilter;
