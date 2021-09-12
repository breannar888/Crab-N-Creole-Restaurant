//npm install react-router-dom to use Link
import "../css/Nav.css";
import { NavLink } from "react-router-dom";
import { Anchor } from "antd";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "./windowdimensons";
const { Link } = Anchor;

function NavBar() {
  const [isOpen, setisOpen] = useState(false);
  const showMobileMenu = () => setisOpen(!isOpen);
  const { height, width } = useWindowDimensions();

  //if isOpen=false and width of screen >= 1068 set isOpen=true
  //set const to width of screen, check through that

  return (
    <>
      <div className="menu-btn">
        <FontAwesomeIcon
          size="lg"
          icon={faBars}
          onClick={showMobileMenu}
        />
      </div>
      <div className="nav-container">
        <div className="logo">Crab N' Creole</div>
        <nav className={isOpen ? "nav-menu-active" : "nav-menu"}>
        <ul onClick={showMobileMenu}>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" activeClassName="active">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" activeClassName="active">
                Gallery
              </NavLink>
            </li>
            <li>
              <Anchor affix={false}>
                <Link href="#contact-bar" title="Contact Us" />
              </Anchor>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
