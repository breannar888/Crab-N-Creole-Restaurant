//npm install react-router-dom to use Link
import "../css/Nav.css";
import { NavLink } from "react-router-dom";
import { Anchor } from "antd";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import PopupCart from "./PopupCart";
import { CartState } from "../context/CartContext";
import { connect } from "react-redux";
//import useWindowDimensions from "./windowdimensons";

const { Link } = Anchor;

const NavBar = ({ cart }) => {
  const [cartCount, setcartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setcartCount(count);
  }, [cart, cartCount]);

  const [isOpen, setisOpen] = useState(true);

  const showMobileMenu = () => {
    setisOpen(!isOpen);
    console.log(isOpen);
  };

  const { showCart, showShopCart, handleClose } = CartState();

  return (
    <div className="nav-wrap">
      <button
        className="menu-btn"
        tabIndex="1"
        aria-label="Menu"
        onKeyPress={showMobileMenu}
      >
        <FontAwesomeIcon size="lg" icon={faBars} onClick={showMobileMenu} />
      </button>
      <div className="nav-container">
        <div className="logo" aria-label="Logo">
          <NavLink to="/" exact className="logo-txt">
            Crab N' Creole
          </NavLink>
        </div>
        <nav className={isOpen ? "nav-menu-active" : "nav-menu"}>
          <ul onClick={showMobileMenu}>
            <li onClick={handleClose}>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li onClick={handleClose}>
              <NavLink to="/menu" activeClassName="active">
                Menu
              </NavLink>
            </li>
            <li onClick={handleClose}>
              <NavLink to="/gallery" activeClassName="active">
                Gallery
              </NavLink>
            </li>
            <li onClick={handleClose}>
              <Anchor affix={false}>
                <Link href="#contact-bar" title="Contact Us" />
              </Anchor>
            </li>
            <li onClick={handleClose}>
              <NavLink to="/order" activeClassName="active">
                Order Now
              </NavLink>
            </li>
            <li className="shop" onClick={showShopCart}>
              <div>
                <FontAwesomeIcon
                  className="shopicon"
                  size="1x"
                  icon={faShoppingBag}
                />
              </div>
              <div className="shopcount">{cartCount}</div>
            </li>
          </ul>
        </nav>
      </div>
      <div>{showCart ? <PopupCart /> : null}</div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStatetoProps)(NavBar);
