import * as actionTypes from "./cart-types";
import ORDER_DATA from "../textdata/orderdata";

const products = ORDER_DATA;
const INITIAL_STATE = {
  products: products,
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id),
      };
    case actionTypes.CHANGE_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
export default cartReducer;
