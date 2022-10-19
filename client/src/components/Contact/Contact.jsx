import React from 'react'
import '../../styles/Contact/Contact.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <>
        <div className="contact-wrapper">
            <h1>CONTACT US</h1>
            <form action="" className='contact-form'>
              <div className="fullname">
                <input type="text" placeholder='Fullname' required />
              </div>
              <div className="email">
                <input type="Email" placeholder='email' required/>
              </div>
              <div className="message">
                <textarea cols="30" rows="5" required placeholder='write your message' />
              </div>
               <div className="form-btn">
                <button>Send</button>
               </div>
            </form>
            <p>Reach Out To US On Our Social Media Account</p>
            <div className="social-icons">
              <FaFacebook className='s-icon'/>
              <FaTwitter className='s-icon'/>
              <FaInstagram className='s-icon'/>
              <FaLinkedin className='s-icon'/>
            </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
    </>
  )
}

export default Contact