import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaBed, FaCalendarCheck, FaSignOutAlt } from 'react-icons/fa'
import Sidebar from './Sidebar'

const Main = () => {
  return (
    <>
        <div className="main-wrapper">
            <div className="overview">
                <Container>
                    <Sidebar />
                    <div className="admin-prof">
                        <div></div>
                        <div className="prof">
                            <img src="/images/istockphoto-1366374033-170667a.jpg" alt="" />
                            <p>Edmond Amofah</p>
                        </div>
                    </div>
                    <div className="log-admin">
                        <h1 className='welcome-admin'><span>Welcome</span> To Admin Dashboard</h1>
                        <p className='logout'><span>LOGOUT</span> <FaSignOutAlt /></p>
                    </div>
                    <h4 className='overview-head'>Overview</h4>
                    <Row>
                        <Col md={6} lg={4}>
                            <div className="overview-content-1 overview-content">
                                <FaBed className='overview-icon'/>
                                <h4>Total Doctors</h4>
                                <h6>23</h6>
                                <p>View Details</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="overview-content-2 overview-content">
                            <FaBed className='overview-icon'/>
                                <h4>Total Patients</h4>
                                <h6>30</h6>
                                <p>View Details</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="overview-content-3 overview-content">
                                <FaCalendarCheck className='overview-icon-1'/>
                                <h4>Total Appointments</h4>
                                <h6>120</h6>
                                <p>View Details</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </>
  )
}

export default Main