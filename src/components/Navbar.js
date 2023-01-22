import React from 'react'
// import {FaCoins} from 'react-icons/fa'
import {BsFillLightningFill} from 'react-icons/bs'

import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <Link to='/'>
      <div className='navbar'>
        <BsFillLightningFill className='icon'/>
        <h1> Krypto.<span className='purple'>info</span></h1>
      </div>
    </Link>
  )
}

export default Navbar
