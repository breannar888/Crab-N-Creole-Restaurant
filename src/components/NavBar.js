//npm install react-router-dom to use Link
import "../css/Nav.css";
import { NavLink } from "react-router-dom";
import { Anchor } from "antd";

const { Link } = Anchor;

function NavBar() {
  return (
    <header className="navbar">
      <div className="logo">Crab N' Creole</div>
      <nav>
        <ul>
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
          <li>
            <NavLink to="/location" activeClassName="active">
              Locate Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
