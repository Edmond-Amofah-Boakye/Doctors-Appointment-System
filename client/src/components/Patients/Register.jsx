import React from 'react'
import '../../styles/Patients/Register.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <div className="patient-reg-wrp">
            <div className="pat-wrp">
                <Container>
                <h1>REGISTER AS PATIENT</h1>
                    <Row>
                        <Col md={5}>
                            <div className="re-img">
                                <img src="/images/becoming-doctor.jpg" alt="userreg" className='xyz'/>
                            </div>
                            <div className="exist-account">
                                <Link to='/userlogin' className='ext-acct'>Already have An Accout ?</Link>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="reg-form">
                                <form action="" className='pat-register'>
                                    <div className="name">
                                        <label htmlFor="">Fullname</label>
                                        <input type="text" />
                                    </div>
                                    <div className="email">
                                        <label htmlFor="">Email</label>
                                        <input type="email" />
                                    </div>
                                    <div className="password">
                                        <label htmlFor="">Password</label>
                                        <input type="password" />
                                    </div>
                                    <div className="c-password">
                                        <label htmlFor="C-password">Confirm Password</label>
                                        <input type="password" />
                                    </div>

                                    <div className="snumber-cnumber">
                                        <div className="s-number">
                                            <label htmlFor="">Student Number</label>
                                            <input type="text" />
                                        </div>
                                        <div className="c-number">
                                            <label htmlFor="">Contact</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="wrp">
                                        <div className="age">
                                            <label htmlFor="">Age</label>
                                            <input type="number" />
                                        </div>
                                        <div className="gender">
                                            <label htmlFor="">Gender</label>
                                            <select name="" id="">
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="contact">
                                        <label htmlFor="">Programme</label>
                                        <input type="text" />
                                    </div>
                                    <div className="address">
                                        <label htmlFor="">Address</label>
                                        <input type="text" />
                                    </div>
                                    <button>Register</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </>
  )
}

export default Register