import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutme" id="about" style={{ background: "white" }}>
      <div className="row">
        <div className="col-sm-5">
          <div className="header" style={{ textAlign: "left" }}>
            Get to know me better:
          </div>
          <div
            className="image-wrapper"
            style={{ marginTop: "50px", marginLeft: "0px" }}
          >
            <img
              src="https://i.pinimg.com/originals/00/c5/37/00c537bdf08547f031540521892e5aa7.gif"
              class="img-fluid"
              alt="Profile"
              style={{ width: "500px", height: "auto" }}
            />
          </div>
        </div>
        <div className="col-lg" style={{ textAlign: "left" }}>
          <div className="paragraph">
            <p>
              I am an aspiring Electrical Engineering student at Toronto
              Metropolitan University. I have a passion for problem-solving and
              a strong foundation in electronic circuits, signal processing, and
              control systems.
            </p>

            <p>
              Throughout my academic journey, I have gained practical experience
              in various aspects of electrical engineering. I have successfully
              completed projects in circuit design and analysis, including the
              design of a voltage-controlled frequency function generator.
              Additionally, I have delved into the fascinating realm of control
              systems, where I undertook a project focused on designing and
              simulating a PID controller using MATLAB. This endeavor allowed me
              to explore the intricacies of system dynamics and fine-tune the
              controller parameters to meet specific specifications. It was a
              rewarding experience that deepened my understanding of control
              theory and its practical applications.
            </p>
            <p>
              In addition to my technical skills, I am proficient in multiple
              programming languages, including Java, C, and MATLAB. I am also
              familiar with software tools such as Multisim, Intel Quartus, and
              CodeWarrior.
            </p>
            <p>
              Outside of my studies, I am deeply committed to making a positive
              impact in my local community. For several years, I have been an
              active and dedicated associate at the Sheen for She Foundation, a
              non-profit organization dedicated to assisting the vulnerable
              population affected by the homeless crisis. In this role, I have
              been involved in various aspects, including marketing, event
              management, and event logistics and planning. By supporting
              initiatives that provide basic hygiene equipment and self-care
              services to those in need, I have witnessed firsthand the
              transformative power of community engagement. Through my volunteer
              work, I have not only developed leadership and interpersonal
              skills but also honed my abilities in teamwork, organization, and
              effective communication. It is truly fulfilling to contribute to
              such a meaningful cause and be part of a collective effort to
              bring positive change to the lives of others.
            </p>
            <p>
              As a wise man once said: 'Engineers like to solve problems, if
              there are no problems available, they create their own.' I embody
              this spirit of curiosity and creativity, constantly seeking new
              challenges and opportunities to enhance my skills and grow as a
              human being. If you have any questions or exciting projects to
              collaborate on, I'm always ready to connect and contribute. Feel
              free to reach out to me, and let's create something amazing
              together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
