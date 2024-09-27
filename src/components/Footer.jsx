import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer footer101">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4 style={{ color: "black" }}>PG DISSERTATION HUB</h4>
            <ul>
            <li>
                <a href="/" style={{ color: "black" }}>
                Home
                </a>
              </li>
              <li>
                <a href="/" style={{ color: "black" }}>
                  about us
                </a>
              </li>
              <li>
                <a href="/" style={{ color: "black" }}>
                  contact us
                </a>
              </li>
              <li>
                <a href="/" style={{ color: "black" }}>
                review
                </a>
              </li>
              <li>
                <a href="/" style={{ color: "black" }}>
                  affiliate program
                </a>
              </li>
            </ul>
          </div>
          

          <div className="footer-col">
            <h4 style={{ color: "black" }}>follow us</h4>
            <div className="social-links">
              <a href="/">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ color: "black" }}
                />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} style={{ color: "black" }} />
              </a>
              <a href="/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "black" }}
                />
              </a>
              <a href="/">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ color: "black" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
