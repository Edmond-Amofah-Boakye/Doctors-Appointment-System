import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/AdminDashboard/AdminDashboard.css'
import DocSchdMain from './DocSchdMain'
import DoctorsSidebarSidebar from './DoctorsSidebar'

const DoctorSchedule = () => {
    return (
        <>
            <div className="admin-dashboard-wrapper">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <DocSchdMain />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
      )
}

export default DoctorSchedule