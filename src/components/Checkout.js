import { CartState } from "../context/CartContext";
import { Box, Typography, Button, Card, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import * as React from "react";
import { connect } from "react-redux";
import { removeFromCart, emptyCart } from "../context/cart-actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Checkout = ({ cart, removeFromCart }) => {
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    setSubtotal(
      cart.reduce(
        (acc, curr) =>
          acc + Number(curr.price) * (1.0725).toFixed(2) * curr.qty,
        0
      )
    );
    setTax(
      cart.reduce(
        (acc, curr) =>
          acc + (Number(curr.price) * (1.0725).toFixed(2) * curr.qty) % (curr.qty),
        0
      )
    );
  }, [cart]);

  console.log("tax:", tax);
  return (
    <Box>
      <Typography
        variant="h3"
        component="div"
        sx={{
          textAlign: "center",
          pt: "3%",
          pb: "3%",
          fontFamily: "Montez, cursive",
          color: "rgb(11, 14, 48)",
        }}
      >
        Your Order
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pl: "10%",
          pr: "10%",
          pb: "3%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgb(238, 238, 238)",
            width: "55%",
            p: "3%",
          }}
        >
          {cart.map((cartItems) => (
            <Card
              key={cartItems.id}
              component="div"
              sx={{
                width: "94%",
                p: "3%",
                position: "relative",
                mt: "1%",
                mb: ".5%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                component="div"
                sx={{
                  width: 200,
                  height: 100,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia
                  component="img"
                  image={cartItems.image}
                  sx={{
                    maxHeight: 100,
                    maxwidth: "150px",
                  }}
                ></CardMedia>
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Playfair Display",
                  fontStyle: "serif",
                  fontSize: "15px",
                  textOverflow: "ellipsis",
                  width: "150px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {cartItems.title}
              </Typography>
              <Box>
                <Box
                  sx={{
                    justifyContent: "space-between",
                  }}
                ></Box>
              </Box>
              <Box>
                <Typography>x{cartItems.qty}</Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Playfair Display",
                  fontStyle: "serif",
                  fontSize: "17px",
                  mt: "-.5%",
                }}
              >
                ${cartItems.price * cartItems.qty}
              </Typography>
              <Button
                sx={{
                  color: "rgb(11, 14, 48)",
                  background: "white",
                  height: "fit-content",
                  pt: "0px",
                  "&:hover": {
                    color: "red",
                    background: "white",
                  },
                }}
                onClick={() => {
                  removeFromCart(cartItems.id);
                }}
              >
                <FontAwesomeIcon size="lg" icon={faTrashAlt}></FontAwesomeIcon>
              </Button>
            </Card>
          ))}
        </Box>
        <Box
          sx={{
            backgroundColor: "rgb(196, 162, 117)",
            width: "35%",
            p: "1%",
          }}
        >
          <Box
            sx={{
              mb: "5%",
              textAlign: "center",
            }}
          >
            <Typography>Total: ${total.toFixed(2)}</Typography>
            <Typography>Taxes: ${tax.toFixed(2)}</Typography>
            <Typography>Subtotal: ${subtotal.toFixed(2)}</Typography>
          </Box>
          <Box
            sx={{
              bottom: 0,
            }}
          >
            <NavLink to="/order">
              <Button
                sx={{
                  width: "100%",
                  background: "grey",
                  color: "white",
                  mb: "2%",
                  "&:hover": {
                    background: "white",
                    color: "black",
                  },
                }}
              >
                Order More
              </Button>
            </NavLink>
            <Button
              sx={{
                width: "100%",
                background: "rgb(11, 14, 48)",
                color: "white",
                "&:hover": {
                  background: "rgb(20, 25, 85)",
                },
              }}
            >
              Checkout
            </Button>
          </Box>
        </Box>
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
