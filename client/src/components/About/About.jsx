import React from "react";
import "../../styles/About/About.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Vision from "./Vision";
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <Container>
          <div className="about-content">
            <h1>
              Making Health <br /> Care Better Together
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem ad quae animi nesciunt. Ex hic animi rem officiis in
              totam.
            </p>
            <button>Book Appointemt</button>
          </div>
        </Container>
      </div>
      <div className="about-info">
        <Container>
          <Row>
            <Col md={6} lg={4}>
              <div className="about-appoint">
                <h4>Appointments</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque, sint atque? Ducimus architecto atque!
                </p>
                <Link to="/appointment" className="appoint">
                  Make Appointment
                </Link>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="working-hours">
                <h4>Working Time</h4>
                <div className="time">
                  <p>Mon-Fri:</p>
                  <p>7:00am - 11:00pm</p>
                </div>
                <hr />
                <div className="time">
                  <p>Sat:</p>
                  <p>8:00am - 10:00pm</p>
                </div>
                <hr />
                <div className="time">
                  <p>Sunday:</p>
                  <p>Closed</p>
                </div>
                <hr />
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="about-emergency">
                <h4>Emergency Care</h4>
                <h4>030-145521-5652</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque, sint atque? Ducimus, atque!
                </p>
              </div>
            </Col>
          </Row>
          <div className="more-sect">
            <Vision />
          </div>
        </Container>
      </div>
        <Footer />
    </>
  );
};

export default About;
