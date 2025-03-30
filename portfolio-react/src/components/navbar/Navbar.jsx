import React from 'react'
import './navbar.css'
import logo from '../../assets/jlogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li>home</li>
            <li>about me</li>
            <li>services</li>
            <li>portfolio</li>
            <li>contact</li>
        </ul>
        <div className="nav-connect">connect with Me</div>
    </div>
  )
}

export default Navbar