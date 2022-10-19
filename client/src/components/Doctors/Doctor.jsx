import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../styles/DoctorPage/DoctorPage.css'


const Doctor = () => {
  return (
    <>
        <div className="doc-page-wrp">
            <div className="doc-list">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="doc-details">
                                <img src="images/henry-ascroft-4RJYV_rkoeM-unsplash.jpg" alt="" />
                                <div className="doc-spec">
                                    <h3>Dr. Kezia Appiah</h3>
                                    <h6>Optamologist</h6>
                                </div>
                                <div className="work-hours">
                                    <h4>Monday-Friday</h4>
                                    <h4>08:00-17:00</h4>
                                </div>
                                <div className="view">
                                    <h4>View Details</h4>
                                </div>
                                <div className="view">
                                    <h4>Book Appointment</h4>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="doc-details">
                                <img src="images/istockphoto-1366374033-170667a.jpg" alt="" />
                                <div className="doc-spec">
                                    <h3>Dr. Kezia Appiah</h3>
                                    <h6>Optamologist</h6>
                                </div>
                                <div className="work-hours">
                                    <h4>Monday-Friday</h4>
                                    <h4>08:00-17:00</h4>
                                </div>
                                <div className="view">
                                    <h4>View Details</h4>
                                </div>
                                <div className="view">
                                    <h4>Book Appointment</h4>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="doc-details">
                                <img src="images/istockphoto-1366374033-170667a.jpg" alt="" />
                                <div className="doc-spec">
                                    <h3>Dr. Kezia Appiah</h3>
                                    <h6>Optamologist</h6>
                                </div>
                                <div className="work-hours">
                                    <h4>Monday-Friday</h4>
                                    <h4>08:00-17:00</h4>
                                </div>
                                <div className="view">
                                    <h4>View Details</h4>
                                </div>
                                <div className="view">
                                    <h4>Book Appointment</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </>
  )
}

export default Doctor