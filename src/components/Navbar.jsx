import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <label className='logo'>AcmeFresh</label>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar