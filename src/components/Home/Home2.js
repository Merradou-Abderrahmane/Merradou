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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I fell head over heels for the world of programming, and I've certainly gathered a trick or two (or maybe more! 🤷‍♂️).
              <br />
              <br />Here's the deal – I'm fluent in languages like
              <i>
                <b className="purple"> JavaScript, PHP, and Kotlin, </b>
              </i> not exactly classics, but they're the gears that keep the modern tech world running.
              <br />
              <br />
              My focus? Carving the path for web technologies and crafting innovative products. You'll usually find me creating&nbsp;
              <i>
                <b className="purple">web apps </b>    and occasionally dipping into <b className="purple">mobile development </b> or {" "}
                <b className="purple">
                WordPress.
                </b>
              </i>
              <br />
              <br />
              
              I work with <b className="purple">Laravel and React,</b> and I also
              <i>
                <b className="purple">
                  {" "}
                  freelance and teach coding to kids.
                </b>
              </i>
              &nbsp; 
              {/* <i>
                <b className="purple"> Web3!</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Merradou-Abderrahmane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MerradouA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/merradou-abderrahmane/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/abderahmane_merradou/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
