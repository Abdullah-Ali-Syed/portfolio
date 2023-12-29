import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import "./Navbar.css";
import resumeFile from "../assets/Abdullah_Syed_Resume_2023.pdf";
import { Link, animateScroll as scroll } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.min.js";
import { Collapse } from "bootstrap"; // Import the Collapse component from Bootstrap JavaScript


const handleDownloadResume = (event) => {
  event.preventDefault(); // Prevent default navigation behavior
  // Create a temporary anchor element
  const link = document.createElement("a");
  link.href = resumeFile;
  link.target = "_blank";
  link.download = "Abdullah_Syed_Resume.pdf";

  // Programmatically trigger the download
  link.click();
  //window.open(resumeFile, '_blank', 'noopener,noreferrer');
};




function Navbar() {

  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);
const handleButtonClick = () => {
  setNavbarCollapsed(!isNavbarCollapsed);
};
  
  useEffect(() => {
    const navElement = document.getElementById("nav");
    const navCollapse = new Collapse(navElement, { toggle: false });

    if (!isNavbarCollapsed) {
      navCollapse.show();
    } else {
      navCollapse.hide();
    }
  }, [isNavbarCollapsed]);


  return (
    <>
      <nav
        className="navbar navbar-expand-md fixed-top"
        style={{ background: "black", padding: "0.2rem" }}
      >
        <div className="container">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={200}
            className="navbar-brand"
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "cursive",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.3)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Welcome
          </Link>

          <button
            type = "button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-label="Expand Navigation"
            style={{ background: "white" }}
            onClick={handleButtonClick}
          >
            <div className="navbar-toggler-icon"></div>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isNavbarCollapsed ? "" : "show"
            }`}
            id="nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                  className="nav-link"
                  style={{ color: "white", fontSize: "18px" }}
                  onMouseOver={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href
                  className="nav-link"
                  style={{ color: "black", fontSize: "21px" }}
                >
                  -
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                  className="nav-link"
                  style={{ color: "white", fontSize: "18px" }}
                  onMouseOver={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href
                  className="nav-link"
                  style={{ color: "black", fontSize: "21px" }}
                >
                  -
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={200}
                  className="nav-link"
                  style={{ color: "white", fontSize: "18px" }}
                  onMouseOver={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href
                  className="nav-link"
                  style={{ color: "black", fontSize: "21px" }}
                >
                  ----
                </a>
              </li>
              <li className="nav-item">
                <a
                  
                  className="nav-link"
                  style={{
                    color: "black",
                    fontWeight: "500",
                    fontSize: "21px",
                    background: "white",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.textDecoration = "underline";
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.textDecoration = "none";
                    e.target.style.transform = "scale(1)";
                  }}
                  onClick={handleDownloadResume}
                >
                  Resume 🡇
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
