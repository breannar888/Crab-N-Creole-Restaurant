//npm install react-router-dom to use Link
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div>Crab n' Creole</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
