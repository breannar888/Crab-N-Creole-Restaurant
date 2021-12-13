import {
  Card,
  Box,
  Button,
  Typography,
  CardMedia,
  FormControl,
} from "@mui/material";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../css/popupcart.css";
import { connect } from "react-redux";
import { changeQty, removeFromCart, emptyCart } from "../context/cart-actions";

const CartItems = ({ changeQty, removeFromCart, prodID }) => {
  //changes quantity based on input value
  const [input, setInput] = useState(prodID.qty);

  const onchangeHandler = (e) => {
    setInput(e.target.value);
    changeQty(prodID.id, e.target.value);
  };

  return (
    <Card
      key={prodID.id}
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
          width: 150,
          height: 100,
        }}
      >
        <CardMedia
          component="img"
          image={prodID.image}
          sx={{
            maxHeight: 100,
          }}
        ></CardMedia>
      </Box>
      <Box component="div">
        <Box
          sx={{
            justifyContent: "space-between",
            width: "100%",
            pl: "5%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: "1%",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontFamily: "Playfair Display",
                fontStyle: "serif",
                fontSize: "15px",
              }}
            >
              {prodID.title}
            </Typography>
          </Box>
          <FormControl
            sx={{
              width: 0.7,
            }}
          >
            <input
              min="1"
              max="20"
              type="number"
              id="qty"
              name="qty"
              value={prodID.qty}
              onChange={onchangeHandler}
            />
          </FormControl>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontStyle: "serif",
            fontSize: "17px",
            textAlign: "center",
          }}
        >
          ${prodID.price}
        </Typography>
        <Button
          sx={{
            color: "rgb(11, 14, 48)",
            background: "white",
            "&:hover": {
              color: "red",
              background: "white",
            },
          }}
          onClick={() => {
            removeFromCart(prodID.id);
          }}
        >
          <FontAwesomeIcon size="lg" icon={faTrashAlt}></FontAwesomeIcon>
        </Button>
      </Box>
    </Card>
  );
};

const mapStatetoProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    changeQty: (id, value) => dispatch(changeQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    emptyCart: (id) => dispatch(emptyCart(id)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(CartItems);
