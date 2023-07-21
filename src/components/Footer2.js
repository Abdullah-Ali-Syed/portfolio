import React from "react";
import "./Footer2.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import video from "../videos/video-1.mp4"; // Import the video file
import mail from "../images/envelope-regular.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer2() {
  const email = "abdullah.syed@torontomu.ca";
  return (
    <div className="footer-container">
      <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" /> {/* Use the imported video */}
      </video>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Stay tuned on more exciting projects to come ;)
        </p>
        <p className="footer-subscription-text"></p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2
              style={{
                position: "absolute",
                //left:"800px",
                top: "1160px",
              }}
            >
              Connect With Me:
            </h2>
            <Link to="/">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  color: "#f0f6ff",
                  width: "50px",
                  height: "50px",
                  position: "absolute",
                  left: "810px",
                  top: "1150px",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  window.location.href = `mailto:${email}`;
                }}
              />
            </Link>
            <Link to="/">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{
                  color: "#d8e0ee",
                  width: "50px",
                  height: "50px",
                  position: "absolute",
                  left: "915px",
                  top: "1150px",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  window.open("https://linkedin.com", "_blank");
                }}
              />
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small
            className="website-rights"
            style={{ position: "absolute", top: "1220px", left: "690px" }}
          >
            ABDULLAH SYED © 2023
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer2;
