import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars, FaUser, FaBed, FaCalendarCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const PatientSideBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className='test'>
        <FaBars onClick={handleShow} className="side-icon"/>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='admin'>UENR</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className='dashboard-list'>
              <li><FaCalendarCheck /><span><Link to='/' className='list-icon'>Book Appointment</Link></span></li>
              <li><FaUser /><span><Link to='/patient/dashboard' className='list-icon'> My Appointment</Link></span></li>
              <li><FaUser /><span><Link to='/' className='list-icon'>Profile</Link></span></li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
}

export default PatientSideBar