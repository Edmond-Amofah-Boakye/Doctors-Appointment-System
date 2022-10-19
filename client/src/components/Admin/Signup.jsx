import React from 'react'
import '../../styles/AdminDashboard/AdminSignup.css'

const Signup = () => {
  return (
    <>
        <div className="admin-signup-wrp">
            <h3>Register Admin</h3>
            <form className='reg-admin'>
                <div className="username">
                    <input type="text" placeholder='Full Name' />
                </div>
                <div className="email">
                    <input type="email" placeholder='E-Mail' />
                </div>
                <div className="password">
                    <input type="password" placeholder='Password' />
                </div>
                <div className="contact">
                    <input type="tel" placeholder='Contact'/>
                </div>
                <div className="address">
                    <input type="text" placeholder='Address' />
                </div>
                <div className="image">
                    <label htmlFor="profile">Choose Profile Picture</label>
                    <input type="file" />
                </div>
                <div className="submit">
                    <button>SEND</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Signup