import React from 'react'
import { Container } from 'react-bootstrap'
import { FaSignOutAlt } from 'react-icons/fa'
import PatientRecords from '../Patients/PatientRecords'
import PatientSideBar from './PatientSideBar'

const PatientMainBoard = () => {
  return (
        <>
            <div className="main-wrapper">
                <div className="overview">
                    <Container>
                        <PatientSideBar />
                        <div className="admin-prof">
                            <div></div>
                            <div className="prof">
                                <img src="/images/istockphoto-1366374033-170667a.jpg" alt="" />
                                <p>Edmond Amofah</p>
                            </div>
                        </div>
                        <div className="log-admin">
                            <h1 className='welcome-admin'><span>ALL</span> RECORDS</h1>
                            <p className='logout'><span>LOGOUT</span> <FaSignOutAlt /></p>
                        </div>
                        <h4 className='p-record-head'>Booked Appointments</h4>
                        <div className="filter-search">
                            <div className="filter">
                                <span>Show</span>
                                <input type="number" min={1} defaultValue={0}/>
                                <span>entries</span>
                            </div>
                            <div className="search">
                                <input type="text" placeholder='search here.....' />
                            </div>
                        </div>
                        <PatientRecords />
                    </Container>
                </div>
            </div>
        </>
      )
}

export default PatientMainBoard