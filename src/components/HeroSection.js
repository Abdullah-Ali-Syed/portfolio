import React, { useRef } from "react";
import "../App.css";
import { Button } from "react-bootstrap";
//import { Button } from "./Button";
import "./HeroSection.css";
import video from "../videos/video-1.mp4"; // Import the video file
import video2 from "../videos/video-2.mp4"; // Import the video file
import image from "../images/img-10.jpg"; // Import the video file
import LinkedIn from "../images/linkedin.svg";
import GITHUB from "../images/github.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function HeroSection() {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay was prevented:", error);
        // Handle autoplay restriction, maybe show a play button
      });
    }
  };

  const imageStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    objectFit: 'cover',
  };

  return (
    <div className="hero-container" id="home">
      <div className="container-lg">
        <video className="video" autoPlay loop muted>
          <source src={video} type="video/mp4" /> {/* Use the imported video */}
        </video>
        <div className="container" style={{ marginTop: "110px" }}>
          <div className="row">
            <h1
              style={{
                fontSize: "67px",
                color: "white",
                fontWeight: "600",
                marginTop: "-92px",
              }}
            >
              HEY THERE! I'M ABDULLAH SYED
            </h1>
          </div>
          <div className="row">
            <div
              className="col-12"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "29px",
                  color: "white",
                  fontStyle: "bold",
                  textAlign: "center",
                }}
              >
                Welcome To My Digital Realm Where Creativity Meets Innovation
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="hero-btns">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "200px",
                      height: "100px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Button
                      className="btns btn--outline btn--large"
                      style={{
                        marginTop: "-18px",
                        borderRadius: "0",
                        background: "transparent",
                        borderColor: "white",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{
                          color: "#d8e0ee",
                          width: "50px",
                          height: "50px",
                          position: "relative",
                        }}
                        onClick={(event) => {
                          event.preventDefault();
                          window.open(
                            "https://www.linkedin.com/in/abdullah-syed-aaa302280/",
                            "_blank"
                          );
                        }}
                      />
                    </Button>
                  </div>

                  <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    style={{
                      background: "white",
                      borderColor: "white",
                      height: "80px",
                      width: "105px",
                      marginTop: "-18px",
                      borderRadius: "0",
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      window.open(
                        "https://github.com/Abdullah-Ali-Syed",
                        "_blank"
                      );
                    }}
                  >
                    <img
                      src={GITHUB}
                      alt="GITHUB Icon"
                      style={{ width: "55px", height: "55px" }}
                    />
                    <i className="far fa-play-circle" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/*//////////////////////////////////////////For Smaller Screens/////////////////////////////////////////////////////// */}
      <div className="container-sm">
        <div className="container-fluid p-0">
        <img src={image} alt="Still Image" className="position-fixed top-0 start-0 w-100 h-100" style={imageStyle} />
        <div className="container" style={{ marginTop: "110px" }}>
          <div className="row">
            <h1
              style={{
                fontSize: "50px",
                color: "white",
                fontWeight: "600",
                marginTop: "-92px",
              }}
            >
              HEY THERE! I'M ABDULLAH SYED
            </h1>
          </div>
          <div className="row">
            <div
              className="col-12"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "29px",
                  color: "white",
                  fontStyle: "bold",
                  textAlign: "center",
                }}
              >
                Welcome To My Digital Realm Where Creativity Meets Innovation
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="hero-btns">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "200px",
                      height: "100px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Button
                      className="btns btn--outline btn--large"
                      style={{
                        marginTop: "-18px",
                        borderRadius: "0",
                        background: "transparent",
                        borderColor: "white",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{
                          color: "#d8e0ee",
                          width: "50px",
                          height: "50px",
                          position: "relative",
                        }}
                        onClick={(event) => {
                          event.preventDefault();
                          window.open(
                            "https://www.linkedin.com/in/abdullah-syed-aaa302280/",
                            "_blank"
                          );
                        }}
                      />
                    </Button>
                  </div>

                  <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    style={{
                      background: "white",
                      borderColor: "white",
                      height: "80px",
                      width: "105px",
                      marginTop: "-18px",
                      borderRadius: "0",
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      window.open(
                        "https://github.com/Abdullah-Ali-Syed",
                        "_blank"
                      );
                    }}
                  >
                    <img
                      src={GITHUB}
                      alt="GITHUB Icon"
                      style={{ width: "55px", height: "55px" }}
                    />
                    <i className="far fa-play-circle" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    
    </div>
  );
}

export default HeroSection;
