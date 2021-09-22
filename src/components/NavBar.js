//npm install react-router-dom to use Link
import "../css/Nav.css";
import { NavLink } from "react-router-dom";
import { Anchor } from "antd";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//import useWindowDimensions from "./windowdimensons";


const { Link } = Anchor;

function NavBar() {
  const [isOpen, setisOpen] = useState(true);
  const showMobileMenu = () => setisOpen(!isOpen);
  /*
        hide nav when screen size is reduced, currently
        when nav is on nav-menu in desktop view, it'll show when switching to
        mobile menu view (mobile menu is opened), i want it to start
        off closed anytime its under 1060px but unsure how to do this

        const closeMobileMenu = () => {
          if (width > "1060") {
          setisOpen(false);
          }
        };
          - add event listener so it triggers when screen size is changed?
  */

  return (
    <>
      <button className="menu-btn" tabIndex="1" onKeyPress={showMobileMenu}>
        <FontAwesomeIcon size="lg" icon={faBars} onClick={showMobileMenu} />
      </button>
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/" exact className="logo-txt">
            Crab N' Creole
          </NavLink>
        </div>
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
