import ImageGallery from "../components/Gallery.js";
import pic1 from "../images/dish1.jpg";
import pic2 from "../images/dish1.jpg";
import "../css/about.css"
import AboutCard from "../components/AboutCard.js";

function HomePage() {
  return (
    <div>
      <ImageGallery />
      <AboutCard />
    </div>
  );
}
export default HomePage;
