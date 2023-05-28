import classes from "./Footer.module.css";
import karvenLogo from "../assets/karvenLogo.png";
// import { Link } from "react-router-dom";
function Footer() {
  const currentYear = new Date().getFullYear()  
  return (
    <>
      <footer>
        <div className={classes.footerMenu}>
          <div className={classes.col1}>
            <h3>Karven Home</h3>
            <ul>
              <li>Our Story</li>
              {/* <li>Blog</li> */}
              {/* <li>Our Corporate Heart</li>
              <li>Our Sustainable Commitment</li>
              <li>Services</li>
              <li>The Karven Standard</li>
              <li>Open Account</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Terms {"&"} Conditions</li>
              <li>Corporate Responsibility</li> */}
              {/* <li>Careers at Karven</li> */}
            </ul>
          </div>
{/* 
          <div className={classes.col2}>
            <h3>Tools</h3>
            <ul>
              <li>Sample Books</li>
              <li>Catalogs</li>
              <li>Pricelists</li>
              <li>Website Help</li>
              <li>Represented Brands</li>
              <li>Find a Designer</li>
              <li>Design Grad Program</li>
            </ul>
          </div> */}

          <div className={classes.col3}>
            <h3>Stay Connected</h3>
            <ul>
              {/* <li>Showrooms</li> */}
              {/* <li>Showroom Safety Practices</li> */}
              <li>Contact Us</li>
              {/* <li onClick={() => window.location = 'mailto:info@karvenhome.com'}>info@karvenhome.com</li> */}
            </ul>
          </div>

          <div className={classes.col4}>
            <img
              className={classes.karvenLogo}
              src={karvenLogo}
              alt="Karven Logo"
            />
            <p style={{ fontWeight: "bold" }}>
              One Family. One Passion. One Resource.
            </p>
          </div>
        </div>
        <div className={classes.copyright}>
              <p>© {currentYear} Karven Home | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
