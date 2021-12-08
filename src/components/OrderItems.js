import { React } from "react";
import { CartState } from "../context/CartContext";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import "../css/orderpage.css";
import { CardMedia } from "@material-ui/core";
import { addToCart, removeFromCart } from "../context/cart-actions";
import { connect } from "react-redux";

//transfer to own component
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const OrderItems = ({ product, addToCart }) => {
  const { handleShow, dispatch } = CartState();

  return (
    <Card sx={{ display: "flex", height: 250 }}>
      <CardMedia
        component="img"
        sx={{
          width: 151,
        }}
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          fontWeight="fontWeightBold"
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="overline" color="rgb(11, 14, 48)">
          ${product.price}
        </Typography>
        <CardActions
          sx={{
            margin: "auto",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              width: 1,
            }}
          >
            <Button
              sx={{
                color: "white",
                background: "rgb(196, 162, 117)",
                "&:hover": {
                  background: "rgb(11, 14, 48)",
                },
              }}
              onClick={() => {
                addToCart(product.id);
                handleShow();
                scrollToTop();
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchtoProps)(OrderItems);

/*
{cart.some((p) => p.id === product.id) ? (
              <Button
                sx={{
                  color: "white",
                  background: "rgb(196, 162, 117)",
                  "&:hover": {
                    background: "rgb(11, 14, 48)",
                  },
                }}
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
                }}
              >
                Remove From Cart
              </Button>
            ) : (
              <Button
                sx={{
                  color: "white",
                  background: "rgb(196, 162, 117)",
                  "&:hover": {
                    background: "rgb(11, 14, 48)",
                  },
                }}
                onClick={() => {
                  addToCart(product.id);
                  handleShow();
                  scrollToTop();
                }}
              >
                Add to Cart
              </Button>
            )}
*/
