//layout for about cards
import pic1 from "../images/dish1.jpg";
import pic2 from "../images/dish3.jpg";
import pic3 from "../images/dish4.jpg";
import "../css/about.css";

function AboutCard() {
  return (
    <div>
      <div className="wrapper">
        <div className="about-section">
          <img src={pic1} alt="" />
          <div className="text">hihihihihi</div>
        </div>
        <div className="about-section">
          <div className="text">hihi</div>
          <img src={pic2} alt="" />
        </div>
        <div className="about-section">
          <img src={pic3} alt="" />
          <div className="text">hihi</div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
