import backpic1 from "../images/background4.jpg";
import "../css/hero.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { Anchor } from "antd";

const { Link } = Anchor;

//custom styles for material-ui buttons
const useStyles = makeStyles({
  btnleft: {
    background: "rgb(11, 14, 48)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    position: "absolute",
    top: "72.3%",
    left: "42%",
    transform: "translate(-50%, -50%)",
    "&:hover": {
      opacity: " 0.9",
      filter: "alpha(opacity=2)",
      border: "1px solid white",
    },
  },
  btnright: {
    background: "rgb(11, 14, 48)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    position: "absolute",
    top: "72.3%",
    left: "57%",
    transform: "translate(-50%, -50%)",
    "&:hover": {
      opacity: " 0.9",
      filter: "alpha(opacity=2)",
      border: "1px solid white",
    },
  },
});

function HeroSection() {
  const classes = useStyles();
  return (
    <section className="hero-section">
      <div className="hero-text">
        <p className="hero-logo">Crab N' Creole</p>
        <p className="hero-phrase">
          Serving the best creole flavors since 1955
        </p>
      </div>
      <img src={backpic1} alt="" />
      <div>
        <NavLink to="/menu" activeClassName="active">
          <Button className={classes.btnleft}>Explore Menus</Button>
        </NavLink>
        <Button href="#reservation" className={classes.btnright}>Reservations</Button>
      </div>
    </section>
  );
}
export default HeroSection;

