//npm install react-router-dom to use Link
import "../css/Nav.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header class="navbar">
      <div class="logo">Crab n' Creole</div>
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
            <NavLink to="/contact-us" activeClassName="active">
              Contact Us
            </NavLink>
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
