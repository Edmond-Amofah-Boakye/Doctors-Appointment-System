import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Main from './Main'
import Sidebar from './Sidebar'
import '../../styles/AdminDashboard/AdminDashboard.css'

const AdminDashboard = () => {
  return (
    <>
        <div className="admin-dashboard-wrapper">
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <Main />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default AdminDashboard