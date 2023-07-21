import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./Cards.css";
import CardItem from "./CardItem";
import FG from "../images/FG.png";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img8 from "../images/img-8.jpg";
import ASL from "../images/ASL.png";
import IFA from "../images/IFA.png";
import WRA from "../images/WRA.png";

function Cards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="cards" id="projects">
      <h1 style={{ fontWeight: "550" }}>
        Check out these EPIC Projects I've worked on!
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={FG}
              type="image/jpg"
              text="Linear Voltage Controlled Frequency Function Generator"
              style={{ textAlign: "center", fontWeight: "500" }}
              label="Tenacity"
              path="/function_generator_project"
            />
            <CardItem
              src={
                "https://upload.wikimedia.org/wikipedia/commons/3/33/PID_Compensation_Animated.gif"
              }
              type="image/jpg"
              text="Design of PID Controller for Servo Positioning Module"
              style={{ textAlign: "center" }} // Corrected syntax for the style attribute
              label="Ingenuity"
              path="/pid_controller"
            />
          </ul>
          <ul className="cards__items">
            <div
              style={{ display: "inline-block", width: "100%", height: "100%" }}
            >
              <CardItem
                src={ASL}
                type="image/jpg"
                text="Microcontroller Maze Solver: Simulating Guiding Robot with Assembly"
                style={{ textAlign: "center" }}
                label="Zeal"
                path="/maze_guider"
              />
            </div>

            <div
              style={{ display: "inline-block", width: "100%", height: "100%" }}
            >
              <CardItem
                src={IFA}
                type="image/jpg"
                text={
                  "Ingredient-Based Dish Finder: A React Web App " +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0 "
                }
                style={{ textAlign: "center" }}
                label="Efficacy"
                path="/react_app"
              />
            </div>

            <div
              style={{ display: "inline-block", width: "100%", height: "100%" }}
              onClick={handleShow}
            >
              <CardItem
                src={WRA}
                type="image/jpg"
                text={
                  "React Portfolio Website " +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0 " +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0 " +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0 " +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0 " +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0 " +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0 " +
                  "\u00A0"
                }
                style={{ textAlign: "center" }}
                label="Autotelic"
              />
            </div>
            <Modal show={show} onHide={handleClose} size="xl">
              <Modal.Header style={{ backgroundColor: "#f0f8ff" }} closeButton>
                <Modal.Title>
                  <h1 style={{ fontSize: "30px", fontWeight: "600", textDecoration:"underline"}}>
                    React Portfolio Website
                  </h1>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body
                style={{ height: "500px", backgroundColor: "#f0f8ff" }}
              >
                <div className="row">
                  <div className="col">
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "18px",
                        fontWeight:"500",
                        margin: "1.5rem 0 0 0",
                        backgroundColor: "#e0ffff",
                      }}
                    >
                      What better way to showcase the projects I've worked on
                      than through a website? In creating this site, I leveraged
                      the power of the React framework, delving into JavaScript,
                      HTML, and CSS to bring my vision to life. To ensure a
                      seamless user experience across various devices, I
                      employed Bootstrap, a popular front-end framework that
                      enabled my site to adapt to different screen sizes. Just
                      as the term "autotelic" encapsulates the idea of
                      activities that are intrinsically rewarding and
                      self-fulfilling, my website reflects the passion and
                      dedication I poured into every aspect of its development.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={{backgroundColor:"white", textAlign:"center", margin:"1rem 0 0 0"}}>
                    <img
                      src="https://blog-cdn.crowdcontent.com/crowdblog/Website-Design-Gif.gif"
                      style={{height:"300px", width:"auto"}}
                    /> 
                    
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer style={{ backgroundColor: "#f0f8ff" }}>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
