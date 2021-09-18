//import Carousel and the related css file
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//overrides base ccs file in order to manipulate height
import "../css/Gallery.css";
import IMAGE_DATA from "../textdata/gallerydata";

function ImageGallery() {
  return (
      <div className="frame">
    <Carousel
      stopOnHover={false}
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={true}
      width={"100%"}
      dynamicHeight={true}
      interval={"5000"}
    >

    {IMAGE_DATA.map((image) => {
      return (
        <div key={image.id}>
          <img src={image.image} alt=""/>
        </div>
      )
    })}
    </Carousel>
    </div>
  );
}
export default ImageGallery;
