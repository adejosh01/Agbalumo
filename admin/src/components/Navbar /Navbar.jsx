import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>Àgbálùmọ́</h1>
      <img className='profile' src={assets.profile_image} alt='profile' />

    </div>
  )
}

export default Navbar