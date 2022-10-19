import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/AdminDashboard/AdminDashboard.css'
import DoctorsMainPage from './DoctorsMainPage'
import DoctorsSidebarSidebar from './DoctorsSidebar'

const DoctorDashboard = () => {
  return (
    <>
        <div className="admin-dashboard-wrapper">
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <DoctorsMainPage />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default DoctorDashboard