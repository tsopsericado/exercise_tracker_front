import React from 'react';
import Navbar from '../Navbar/Navbar';
import Logo from '../../image/useronboard2.png';
import './Landing.css'

function Landing() {
  return (
    <div>
        <Navbar/>
        <div className='landing-container'>
            <div className='landing-cont'>
                <div className='text'>
                    <h1>Track Your Workouts, Achieve Your Goals</h1>
                    <p>Our exercise tracker app makes it easy to track your workouts, <br /> set goals, and see your results over time. Download it today and start getting fit!</p>
                </div>
                <div className='image'>
                    <img src={Logo} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing