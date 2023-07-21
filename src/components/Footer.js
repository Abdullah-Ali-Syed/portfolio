import React from "react";
import "./Footer.css";
//import { Button } from "./Button";
import { Link } from "react-router-dom";
import video from "../videos/video-1.mp4"; // Import the video file
import mail from "../images/envelope-regular.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";

function Footer() {
  const email = "abdullah.syed@torontomu.ca";
  return (
    <div
      className="footer-container"
      style={{
        background:
          "linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)",
      }}
    >
      <div className="row">
        <div className="col">
          <h1 style={{ color: "white", fontSize: "35px" }}>
            Stay tuned on more exiting projects to come ;)
          </h1>
        </div>
      </div>
      <div className="row" style={{ padding: "1rem" }}></div>
      <div className="row">
        <div className="col">
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
            </form>
          </div>
        </div>
        <div className="col">
          <Button
            style={{
              background: "transparent",
              border: "2px solid white",
              height: "44px",
              width: "120px",
              fontSize: "20px",
              borderRadius: "0",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "lightgrey";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div className="row" style={{ padding: "0.5rem" }}></div>
      <div className="row">
        <div
          className="col-auto"
          style={{ fontSize: "27px", color: "white", fontWeight: "550" }}
        >
          Connect with me:
        </div>
        <div className="col" style={{ justifyContent: "center" }}>
          <Link to="/">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#f0f6ff", width: "50px", height: "50px" }}
              onClick={(event) => {
                event.preventDefault();
                window.location.href = `mailto:${email}`;
              }}
            />
          </Link>
        </div>
        <div className="col">
          <Link to="/">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#f0f6ff", width: "50px", height: "50px" }}
              onClick={(event) => {
                event.preventDefault();
                window.open(
                  "https://www.linkedin.com/in/abdullah-syed-aaa302280/",
                  "_blank"
                );
              }}
            />
          </Link>
        </div>
      </div>
      <div className="row" style={{ padding: "1.5rem 0 0 0", color: "white" }}>
        ABDULLAH SYED © 2023
      </div>
    </div>
  );
}

export default Footer;
