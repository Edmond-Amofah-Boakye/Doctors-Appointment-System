import React from 'react'
import '../../styles/Appointment/EditAppointment.css'
import { Container, Row , Col } from 'react-bootstrap'

const EditAppointment = () => {
  return (
    <>
        <Container>
            <Row>
                <Col sm={8}>
                    <div className="edit-appoint-form">
                        <form action="">
                            <h3><span className='edit'>EDI</span>T YOUR <span>APPOINTMENT</span></h3>
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
                                    <div className="doc">
                                        <select name="" id="">
                                            <option value="">Mark Anderson</option>
                                            <option value="">Mark Anderson</option>
                                        </select>
                                    </div>
                                    <div className="problem">
                                        <input type="text" placeholder='Problem' />
                                    </div>
                                    <div className="problem-desc">
                                        <textarea cols="30" rows="5" placeholder='Write Description of Problem'/>
                                    </div>
                                    <div className="edit-appt-book">
                                        <button>Update Appointment</button>
                                    </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default EditAppointment