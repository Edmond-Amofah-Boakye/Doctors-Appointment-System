import React from 'react'
import '../../styles/Signin/AdminLogin.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
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
                    </Col>
                    <Col md={6}>
                        <div className="admin-log-form">
                            <h4>ADMIN LOGIN</h4>
                            <form action="">
                                <div className="email">
                                    <input type="email" placeholder='admin email' />
                                </div>
                                <div className="password">
                                    <input type="password" placeholder='admin password'/>
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

export default AdminLogin