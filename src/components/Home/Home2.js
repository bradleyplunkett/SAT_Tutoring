import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHO <span className="purple"> I AM </span> 
            </h1>
            <p className="home-about-body">
            I graduated Dartmouth College, an Ivy League University, with a Bachelor of Arts in History in 2016.  I served as Vice President of the Class of 2016 and was a 4 year member of the 14th-ranked Rowing Team in the United States.            <br />

            <br />
            Since graduation, I've worked in enterprise software sales as a technical product expert, and provide SAT tutoring, College Essay guidance, and college advising consulting to high school students looking for an extra edge in the college admissions process.
            <br />
              <br />Most of my sessions are typically conducted over Zoom, but I'm also happy to meet in person if you are local to the Denver area.

                       <br />
              <br />

              I am currently accepting new clients.  My hourly rate is $40.  Book a free onboarding consultation 
              <i>
  <b className="purple">
    <a href="https://calendly.com/bradleynplunkett/30min"> here.</a>
  </b>
</i>
              <br />
             
              <br />
              
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
