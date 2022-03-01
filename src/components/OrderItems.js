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
import { makeStyles } from "@material-ui/core/styles";

const menuStyles = makeStyles((theme) => ({
  proddescription: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  prodimage: {
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      width: "120px",
    },
  },
}));

const OrderItems = ({ product, addToCart }) => {
  const { handleShow } = CartState();
  const classes = menuStyles();
  return (
    <Card sx={{ display: "flex", height: "auto" }}>
      <CardMedia
        className={classes.prodimage}
        component="img"
        width="150"
        height="250"
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
        <Typography
          className={classes.proddescription}
          variant="body2"
          color="text.secondary"
        >
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