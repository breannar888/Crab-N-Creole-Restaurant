import "../css/contactbar.css";
//install @material-ui/icons for social media icons
import {} from "@material-ui/icons";
import { Twitter, Instagram, Facebook } from "@material-ui/icons";
import ReservationForm from "./ReservationForm";

function ContactBar() {
  return (
    <div className="wrapper_contact" id="contact-bar">
      <section>
        <div className="text-wrap">
          <h2>Dining Hours</h2>
          <ul>
            <li>Tuesday-Friday: 11am - 11pm</li>
            <li>Saturday: 11am – 11pm</li>
            <li>Sunday: 10pm – 11pm</li>
          </ul>
        </div>
        <div className="text-wrap-mid">
          <h2>Contact Us</h2>
          <ul>
            <li>Phone: 111-111-1111</li>
            <li>Email: crabncajun@example.com</li>
          </ul>
        </div>
        <div className="text-wrap-mid" id="reservation">
          <h2>Make A Reservation</h2>
          <ReservationForm/>
        </div>
        <div className="text-wrap-mid">
          <h2>Leave A Review</h2>
          <div className="contact-info">
            <div className="social-contact">
              <a className="twitter" href="https://twitter.com/" target="_blank" rel="noreferrer"><Twitter /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="insta"><Instagram /></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="facebook"><Facebook /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactBar;
