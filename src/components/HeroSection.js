import backpic1 from "../images/background4.jpg";
import "../css/hero.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "./windowdimensons.js";


//custom styles for material-ui buttons
const useStyles = makeStyles((theme) => ({
  btnleft: {
    [theme.breakpoints.up("sm")]: {
      background: "rgb(11, 14, 48)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      float: "left",
      "&:hover": {
        opacity: " 0.9",
        filter: "alpha(opacity=2)",
        border: "1px solid white",
      },
    },
    [theme.breakpoints.down("xs")]: {
      background: "rgb(11, 14, 48)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 10px",
      float: "left",
      fontSize: "10px",
      "&:hover": {
        opacity: " 0.9",
        filter: "alpha(opacity=2)",
        border: "1px solid white",
      },
    }
  },
  btnright: {
    [theme.breakpoints.up("sm")]: {
      background: "rgb(11, 14, 48)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      float: "right",
      "&:hover": {
        opacity: " 0.9",
        filter: "alpha(opacity=2)",
        border: "1px solid white",
      },
    },
    [theme.breakpoints.down("xs")]: {
      background: "rgb(11, 14, 48)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 10px",
      float: "right",
      fontSize: "10px",
      "&:hover": {
        opacity: " 0.9",
        filter: "alpha(opacity=2)",
        border: "1px solid white",
      },
    }
  },
}));
/*

*/

function HeroSection() {
  const classes = useStyles();
  return (
    <div className="hero-section">
      <div className="hero-text">
        <p className="hero-logo">Crab N' Creole</p>
        <p className="hero-phrase">
          Serving the best creole flavors since 1955
        </p>
        <div className="hero-btn">
          <NavLink to="/menu" activeClassName="active">
            <Button className={classes.btnleft}>Explore Menus</Button>
          </NavLink>
          <Button className={classes.btnright} href="#reservation">
            Reservations
          </Button>
        </div>
      </div>
      <img src={backpic1} alt="" />
    </div>
  );
}
export default HeroSection;
