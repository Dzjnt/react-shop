import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ShopContext from "../context";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "40vw",
    height: "85vh",
    borderRadius: "25px",
    overflowY: "auto",
  },
}));

const Cart = () => {
  const classes = useStyles();

  const context = useContext(ShopContext);
  const {
    isCartOpen,
    cart,
    cartTotal,
    handleCartClose,
    deleteProductFromCart,
    increaseProductInCartQuantity,
    decreaseProductInCartQuantity,
  } = context;

  const _renderCartProduct = (product) => {
    const { id, name, image, price, inCartQuantity, productQuantity } = product;

    return (
      <li key={id}>
        <img src={image} alt={name} style={{ width: "100px" }} />
        <h3>{name}</h3>
        <button
          onClick={() => decreaseProductInCartQuantity(id)}
          disabled={inCartQuantity === 1 ? true : false}
        >
          -
        </button>
        <h5>{inCartQuantity}</h5>
        <button onClick={() => increaseProductInCartQuantity(id)}  disabled={productQuantity <= inCartQuantity ? true: false} >+</button>
        <h5>{price} $</h5>
        <button onClick={() => deleteProductFromCart(id)}>x</button>
      </li>
    );
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      className={classes.modal}
      open={isCartOpen}
      onClose={handleCartClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isCartOpen}>
        <div className={classes.paper}>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <h2 id="transition-modal-title">Your cart</h2>
              <ul>{cart.map((product) => _renderCartProduct(product))}</ul>
              <h4>Total price: {cartTotal}$</h4>
            </>
          )}
        </div>
      </Fade>
    </Modal>
  );
};

export default Cart;
