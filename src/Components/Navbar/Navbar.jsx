import React from 'react'
import Img from '../../image/Logo.png'
import './Navbar.css'


function Navbar() {
  return (
    <div className='nav_container'>
        <div className='nav'>
            <div className='logo'>
                <img src={Img} alt="Logo" />
            </div>
            <div className='login'>
                <button className='login_btn'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar