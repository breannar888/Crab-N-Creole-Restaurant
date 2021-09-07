//layout for about cards
import "../css/about.css";
//get data and pass into elements
import ABOUT_DATA from "../textdata/aboutdata";

function AboutCard() {
  return (
    <div>
      <div className="wrapper">
        {ABOUT_DATA.map((about) => {
          return (
            <div className="about-section" key={about.id}>
                <img src={about.pic} alt="" />
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
