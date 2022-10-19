import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaPlus} from 'react-icons/fa'
import '../../styles/AdminDashboard/AdminDocStyle.css'

const AddSchedule = () => {

    const [lgShow, setLgShow] = useState(false);
  
    return (
      <>
        <span className='icon-body-style' onClick={() => setLgShow(true)} >
          Add Schedule
          <FaPlus className='iconStyle'/>
        </span>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <h4>Add Doctor Schedule</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form action="" className="pat-register">
            <div className="name">
              <label htmlFor="">Schedule Date</label>
              <input type="date" name="" id="" />
            </div>
            <div className="email">
              <label htmlFor="">Start Time</label>
              <input type="time" defaultValue="15:30"/>
            </div>
            <div className="email">
              <label htmlFor="">End Time</label>
              <input type="time" defaultValue="20:30"/>
            </div>
            <button className="register">Add Schedule</button>
          </form>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default AddSchedule