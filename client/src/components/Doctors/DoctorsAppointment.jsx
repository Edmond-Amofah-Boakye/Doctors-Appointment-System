import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/AdminDashboard/AdminDashboard.css'
import DoctorAppMainPage from './DoctorAppMainPage'
import DoctorsSidebarSidebar from './DoctorsSidebar'

const DoctorsAppointment = () => {
    return (
        <>
            <div className="admin-dashboard-wrapper">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <DoctorAppMainPage />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
      )
}

export default DoctorsAppointment