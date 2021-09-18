import AboutCard from "../components/AboutCard.js";
import ContactBar from "../components/ContactBar.js";
import HeroSection from "../components/HeroSection.js";
import "../css/layout.css";

function HomePage() {
  return (
    <div className="fill-screen">
      <HeroSection/>
      <AboutCard />
      <ContactBar />
    </div>
  );
}
export default HomePage;
