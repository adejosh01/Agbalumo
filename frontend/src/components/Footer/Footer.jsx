import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <h1 className='logo'>Àgbálùmọ́</h1>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted and elevate
                your dining experience, one delicious meal at a time.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className='footer-content-center'>
                <h2>COMPANNY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+2348157440669</li>
                    <li>contact@tomato.com</li>
                </ul>
                

            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ agbalumo.com - All right reserved</p>
    </div>
  )
}

export default Footer