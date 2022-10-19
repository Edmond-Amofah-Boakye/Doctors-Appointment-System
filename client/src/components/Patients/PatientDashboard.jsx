import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/AdminDashboard/AdminDashboard.css'
import '../../styles/Patients/PatientDashboard.css'
import PatientMainBoard from './PatientMainBoard'
import PatientSideBar from './PatientSideBar'

const PatientDashboard = () => {
  return (
    <>
        <div className="admin-dashboard-wrapper">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <PatientMainBoard />
                        </Col>
                    </Row>
                </Container>
        </div>
    </>
  )
}

export default PatientDashboard