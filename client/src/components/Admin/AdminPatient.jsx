import React from 'react'
import { Container, Table } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";
import Sidebar from './Sidebar';
import '../../styles/AdminDashboard/AdminDocStyle.css'

const AdminPatient = () => {
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
                    <p>Vivian Amofah</p>
                  </div>
                </div>
                <div className="log-admin">
                  <h1 className="welcome-admin">
                    <span>ALL</span> RECORDS
                  </h1>
                  <p className="logout">
                    <span>LOGOUT</span> <FaSignOutAlt />
                  </p>
                </div>
                <h4 className="admin-patient-head">All Patients</h4>
                <div className="filter-search">
                  <div className="filter">
                    <span>Show</span>
                    <input type="number" min={1} defaultValue={0} />
                    <span>entries</span>
                  </div>
                  <div className="search">
                    <input type="text" placeholder="search here....." />
                  </div>
                </div>
    
                <Table striped responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
            </div>
          </div>
        </>
      );
}

export default AdminPatient;