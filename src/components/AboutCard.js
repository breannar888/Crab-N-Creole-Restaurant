//layout for about cards
import "../css/about.css";
//get data and pass into elements
import ABOUT_DATA from "../textdata/aboutdata";
import useWindowDimensions from "./windowdimensons.js";

const Component = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      width: {width} ~ height: {height}
    </div>
  );
};

function AboutCard() {
  return (
    <div>
      <div className="wrapper">
        {ABOUT_DATA.map((about) => {
          return (
            <div className="about-section" key={about.id}>
              <div className="img-wrap">
                <img src={about.pic} alt="" />
              </div>
              <div className="text">
                <h2>{about.title}</h2>
                <p>{about.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutCard;
