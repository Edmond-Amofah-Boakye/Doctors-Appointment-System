import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import '../../styles/Footer/Footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer-wrapper">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="footer-title">
                            <h1>UENR</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="contact-num">
                            <h5>Contact</h5>
                            <h6>+233249300617</h6>
                            <h6>+233200047855</h6>
                        </div>
                        <div className="contact-eemail">
                            <h5>Email</h5>
                            <h6>edmondboakye1622@gmail.com</h6>
                        </div>
                    </Col>
                    <Col md={6}>
                    <div className="contact-icons">
                        <FaFacebook className='s-icon'/>
                        <FaTwitter className='s-icon'/>
                        <FaInstagram className='s-icon'/>
                        <FaLinkedin className='s-icon'/>
                     </div>
                    </Col>
                </Row>
                <p className='copy'>@Copyright 2022 All Rights Reserved</p>
            </Container>
        </div>
    </>
  )
}

export default Footer