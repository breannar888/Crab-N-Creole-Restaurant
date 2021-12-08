import * as actionTypes from "./cart-types";

export const addToCart = (prodID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: prodID,
    },
  };
};

export const removeFromCart = (prodID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: prodID,
    },
  };
};

export const changeQty = (prodID, value) => {
  return {
    type: actionTypes.CHANGE_QTY,
    payload: {
      id: prodID,
      qty: value,
    },
  };
};

export const emptyCart = (prodID) => {
    return {
      type: actionTypes.EMPTY_CART,
    };
  };
