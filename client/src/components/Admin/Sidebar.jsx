import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars, FaUser, FaBed, FaCalendarCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='test'>
      <FaBars onClick={handleShow} className="side-icon"/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='admin'>Admin Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='dashboard-list'>
          <li><FaUser /><span><Link to='/admin/dashboard' className='list-icon'>Dashboard</Link></span></li>
            <li><FaUser /><span><Link to='/admin/doctor' className='list-icon'>Doctors</Link></span></li>
            <li><FaBed /><span><Link to='/admin/patient' className='list-icon'>Patient</Link></span></li>
            <li><FaCalendarCheck /><span><Link to='/admin/doctor/schedule' className='list-icon'>Doctors Schedule</Link></span></li>
            <li><FaUser /><span><Link to='/admin/appointment' className='list-icon'>Appointment</Link></span></li>
            <li><FaUser /><span><Link to='/admin/profile' className='list-icon'>Profile</Link></span></li>
            <li><FaUser /><span><Link to='/admin/signup' className='list-icon'>Signup</Link></span></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;