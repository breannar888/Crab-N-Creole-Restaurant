import { CartState } from "../context/CartContext";
import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import * as React from "react";
import { connect } from "react-redux";
import { removeFromCart, emptyCart } from "../context/cart-actions";
import CartItems from "./CartItems";

const Checkout = ({ cart, prodID }) => {
  const { handleClose, dispatch, showCart } = CartState();

  //video @ 51:50
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <Box
      sx={{
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "space-around",
        pl: "15%",
        pr: "15%",
        pt: "3%",
        pb: "3%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "lightblue",
          width: "50%",
        }}
      >
        {cart.map((cartItems) => (
          <CartItems key={cartItems.id} prodID={cartItems}/>
        ))}
      </Box>
      <Box
        sx={{
          backgroundColor: "gold",
          width: "35%",
        }}
      >
        <Typography>Order Stuff</Typography>
        <Typography>Subtotal: $</Typography>
        <Button>Checkout</Button>
      </Box>
    </Box>
  );
};

const mapStatetoProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Checkout);
