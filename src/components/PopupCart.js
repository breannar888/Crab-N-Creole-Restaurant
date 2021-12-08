import { CartState } from "../context/CartContext";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/popupcart.css";
import { connect } from "react-redux";
import { removeFromCart, emptyCart } from "../context/cart-actions";
import CartItems from "./CartItems";

const PopupCart = ({ cart, emptyCart }) => {
  const { handleClose, showCart } = CartState();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <Box
      className={showCart ? "cart-wrapper" : "cart-wrapper-close"}
      sx={{
        position: "absolute",
        boxShadow: 5,
        width: "25%",
        maxHeight: "60vh",
        backgroundColor: "white",
        right: 25,
        zIndex: 1400,
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "rgb(196, 162, 117)",
          p: "2%",
        }}
      >
        <Typography
          sx={{
            pt: "1%",
            pb: "1%",
            fontFamily: "Playfair Display",
            fontStyle: "serif",
            fontSize: "18px",
          }}
        >
          Your Cart
        </Typography>
        <Button
          sx={{
            zIndex: 1301,
            width: "auto",
            color: "black",
            backgroundColor: "rgb(196, 162, 117)",
            "&:hover": {
              color: "white",
            },
          }}
          onClick={handleClose}
        >
          <FontAwesomeIcon size="lg" icon={faTimes} />
        </Button>
      </Box>
      <Box>
        <Box>
          {cart.length > 0 ? (
            <Box>
              {cart.map((cartItems) => (
                <CartItems key={cartItems.id} prodID={cartItems} />
              ))}
              <Box
                component="div"
                sx={{
                  width: "100%",
                  height: "auto",
                  background: "white",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    p: "3%",
                    pl: "5%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Playfair Display",
                      fontStyle: "serif",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Subtotal:
                  </Typography>
                  <Typography
                    sx={{
                      pr: "8%",
                      fontFamily: "Playfair Display",
                      fontStyle: "serif",
                      fontSize: "16px",
                    }}
                  >
                    ${total}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    pb: "2%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <NavLink to="/order" className="checkout-btn">
                    <Button
                      sx={{
                        width: "100%",
                        background: "rgb(11, 14, 48)",
                        color: "white",

                        height: "auto",
                        "&:hover": {
                          background: "rgb(20, 25, 85)",
                        },
                      }}
                      onClick={handleClose}
                    >
                      View Bag
                    </Button>
                  </NavLink>
                  <Button
                    sx={{
                      background: "grey",
                      color: "white",
                      display: "flex",
                      margin: "auto",
                      mt: "2%",
                      "&:hover": {
                        background: "red",
                      },
                    }}
                    onClick={() => {
                      emptyCart(cart.id);
                    }}
                  >
                    Clear Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          ) : (
            <Typography
              sx={{
                p: "8%",
                fontFamily: "Playfair Display",
                fontStyle: "serif",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              Cart is empty
            </Typography>
          )}
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
    emptyCart: (id) => dispatch(emptyCart(id)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(PopupCart);
