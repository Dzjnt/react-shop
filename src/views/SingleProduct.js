import React from "react";

const SingleProduct = ({ location }) => {
  const {
    id,
    image,
    name,
    category,
    price,
    productQuantity,
    description,
  } = location.state;

  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h4>{category}</h4>
      <h4>Amout:{productQuantity}</h4>
      <h5>{price}$</h5>
      <p>{description}</p>
    </div>
  );
};

export default SingleProduct;
