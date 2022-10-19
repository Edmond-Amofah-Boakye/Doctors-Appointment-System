import React from 'react'
import '../../styles/Appointment/BookAppointment.css'
import { Container, Row , Col } from 'react-bootstrap'

const BookAppointment = () => {
  return (
    <>
        <div className="book-appoint-wrapper">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="bk-app-img">
                            <img src="/images/istockphoto-1366374033-170667a.jpg" alt="doc" />
                        </div>
                        <h5 className='doc-name'>Dr. Vivian Achiaa Amofah</h5>
                    </Col>
                    <Col md={6}>
                        <div className="bk-appoint-form">
                            <form action="">
                                <h3><span className='mkp'>MA</span>KE AN <span>APPOINTMENT</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, incidunt.</p>
                                <div className="name-age">
                                    <div className="name">
                                        <input type="text" placeholder='Full Name' />
                                    </div>
                                </div>
                                <div className="date-age">
                                    <div className="age">
                                        <input type="number" placeholder='Age' />
                                    </div>
                                    <div className="date">
                                        <input type="date" name="" id="" />
                                    </div>
                                </div>
                                <div className="problem">
                                    <input type="text" placeholder='Problem' />
                                </div>
                                <div className="problem-desc">
                                    <textarea cols="30" rows="5" placeholder='Write Description of Problem'/>
                                </div>
                                <div className="appt-book">
                                    <button>Book Appointment</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default BookAppointment