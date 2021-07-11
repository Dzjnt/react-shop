import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import ShopContext from "../../context";

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const PriceFilter = () => {
  const context = useContext(ShopContext);
  const { priceInput, minPrice, maxPrice, handlePriceInputChange } = context;

  return (
    <div style={{ width: "250px" }}>
      <Typography gutterBottom>price: $</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="price filter"
        min={minPrice}
        max={maxPrice}
        value={priceInput}
        onChange={handlePriceInputChange}
      />
    </div>
  );
};

export default PriceFilter;
