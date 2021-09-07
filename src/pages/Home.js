import AboutCard from "../components/AboutCard.js";
import ContactBar from "../components/ContactBar.js";
import HeroSection from "../components/HeroSection.js";


function HomePage() {
  return (
    <div>
      <HeroSection/>
      <AboutCard />
      <ContactBar />
    </div>
  );
}
export default HomePage;
