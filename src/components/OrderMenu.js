import { React, useState } from "react";
import { CartState } from "../context/CartContext";
import "../css/orderpage.css";
import OrderItems from "./OrderItems";
import { Grid } from "@mui/material";
import ORDER_DATA from "../textdata/orderdata";

const OrderMenu = () => {
  const orderitems = ORDER_DATA;
  const [ordermenu] = useState(orderitems);

  return (
    <>
      <div className="order-wrapper">
        <h1>Order Menu</h1>
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="space-around"
        >
          {ordermenu.map((product, x) => (
            <Grid item xs={10} lg={6} key={x + 1}>
              <OrderItems product={product} key={product.title} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default OrderMenu;
