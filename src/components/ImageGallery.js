//import Carousel and the related css file
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//overrides base ccs file in order to manipulate height
import "../css/Gallery.css";

//importing pictures from images folder
import pic1 from "../images/dish1.jpg";
import pic2 from "../images/dish5.jpg";
import pic3 from "../images/dish3.jpg";
import pic4 from "../images/dish4.jpg";
import pic5 from "../images/dish6.jpg";
import pic6 from "../images/dish7.jpg";

function ImageGallery() {
  return (
      <div className="frame">
    <Carousel
      stopOnHover={false}
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      width={"100%"}
      dynamicHeight={false}
      interval={"5000"}
    >
      <div>
        <img src={pic1} alt=""/>
      </div>
      <div>
        <img src={pic2} alt=""/>
      </div>
      <div>
        <img src={pic3} alt=""/>
      </div>
      <div>
        <img src={pic4} alt=""/>
      </div>
      <div>
        <img src={pic5} alt=""/>
      </div>
      <div>
        <img src={pic6} alt=""/>
      </div>
    </Carousel>
    </div>
  );
}
export default ImageGallery;
