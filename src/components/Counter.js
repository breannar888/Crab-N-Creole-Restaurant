import { useState } from "react";
import React from "react";
import { Button, Box } from "@mui/material";
import "../css/orderpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function QuantityBTN({ product, cart, setCart }) {
  const [count, setCount] = useState(0);
  //const [index, setIndex] = useState([]);

  function increase() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrease() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <span>
      <Box
        component="div"
        sx={{
          margin: "auto",
          pt: "8%",
        }}
      >
        <Button
          sx={{
            color: "black",
            "&:hover": {
              color: "rgb(196, 162, 117)",
            },
          }}
          onClick={() => {
            setCart([...cart, product]);
            increase();
          }}
        >
          <FontAwesomeIcon icon={faPlusCircle} size="lg" />
        </Button>
        <Box component="span" sx={{ p: 2, fontSize: 18 }}>
          {count}
        </Box>
        <Button
          sx={{
            color: "black",
            "&:hover": {
              color: "rgb(196, 162, 117)",
            },
          }}
          onClick={() => {
            setCart(cart.filter((c, i) => c.id !== product.id));
            decrease();
          }}
        >
          <FontAwesomeIcon icon={faMinusCircle} size="lg" />
        </Button>
      </Box>
    </span>
  );
}

export default QuantityBTN;