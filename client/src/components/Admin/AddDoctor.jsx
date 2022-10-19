import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa";
import "../../styles/AdminDashboard/AdminDocStyle.css";

const AddDoctor = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <span className="icon-body-style" onClick={() => setLgShow(true)}>
        Add Doctor
        <FaPlus className="iconStyle" />
      </span>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h3 className="title">Add A Doctor</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" className="pat-register">
            <div className="name">
              <label htmlFor="">Fullname</label>
              <input type="text" />
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div className="password-cpassword">
              <div className="d-password">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
              <div className="d-c-password">
                <label htmlFor="c-password">Speciality</label>
                <input type="text" />
              </div>
            </div>
            <div className="snumber-cnumber">
              <div className="s-number">
                <label htmlFor="">Contact</label>
                <input type="tel" />
              </div>
              <div className="c-number dob">
                <label htmlFor="">Date of Birth</label>
                <input type="date" />
              </div>
            </div>
            <div className="wrp">
              <div className="d-address">
                <label htmlFor="">Address</label>
                <input type="text" />
              </div>
              <div className="d-gender">
                <label htmlFor="">Gender</label>
                <select name="" id="">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="contact">
              <label htmlFor="">Choose image</label>
              <input type="file" />
            </div>
            <button className="register">Register</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddDoctor;
