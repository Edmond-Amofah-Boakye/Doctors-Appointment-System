import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars, FaUser, FaBed, FaCalendarCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function DoctorsSidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='test'>
      <FaBars onClick={handleShow} className="side-icon"/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='admin'>Doctor's Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='dashboard-list'>
            <li><FaUser /><span><Link to='/doctor/dashboard' className='list-icon'>Dashboard</Link></span></li>
            <li><FaCalendarCheck /><span><Link to='/doctor/schedule' className='list-icon'>Doctors Schedule</Link></span></li>
            <li><FaUser /><span><Link to='/doctor/allappointments' className='list-icon'>Appointment</Link></span></li>
            <li><FaUser /><span><Link to='/doctor/profile' className='list-icon'>Profile</Link></span></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default DoctorsSidebar;