import {
  createContext,
  useState,
  useContext,
} from "react";

const CartContext = createContext();

function CartContextProvider(props) {
  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const showShopCart = () => {
    setShowCart(!showCart);
    console.log("showCart value:", showCart);
  };

  const value = {
    showCart,
    setShowCart,
    handleClose,
    handleShow,
    showShopCart,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

export default CartContextProvider;

export const CartState = () => {
  return useContext(CartContext);
};
