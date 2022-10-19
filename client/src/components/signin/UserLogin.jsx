import React from 'react'
import '../../styles/Signin/AdminLogin.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaEnvelope, FaKey} from 'react-icons/fa'

const UserLogin = () => {
  return (
    <>
    <div className="admi-login-wrp">
        <div className='admin-row'>
            <Container >
                <Row>
                    <Col md={6}>
                        <div className="admin-log-img">
                            <img src="images/becoming-doctor.jpg" alt="doc" />
                        </div>
                        <Link to='/adminlogin' className='admin-log'>Login As Admin</Link>
                    </Col>
                    <Col md={6}>
                        <div className="admin-log-form">
                            <h4>LOGIN</h4>
                            <form action="">
                                <div className="email">
                                    {/* <FaEnvelope className='icon-c'/> */}
                                    <input type="email" placeholder='email' />
                                </div>
                                <div className="password">
                                    {/* <FaKey className='icon-c'/> */}
                                    <input type="password" placeholder='password'/>
                                </div>
                                <p className='login-as'>LOGIN AS:</p>
                                <div className="doct-patient">
                                    <div className="doctor">
                                        <input type="radio" name='patient'/>
                                        <label htmlFor="rememberme">Doctor</label>
                                    </div>
                                    <div className="patient">
                                        <input type="radio" name='patient'/>
                                        <label htmlFor="rememberme">Patient</label>
                                    </div>
                                </div>
                                <div className="rmb-sign-forgot">
                                    <div className="rememberme">
                                        <input type="checkbox" />
                                        <label htmlFor="rememberme">Remember Me</label>
                                    </div>
                                    <div className="submit">
                                        <button>Login</button>
                                    </div>
                                    <div className="forgetpassword">
                                        <Link to='/forgotpassword' className='pass'>Forgot Password ?</Link>
                                    </div>
                                </div>
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

export default UserLogin