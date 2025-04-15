import React from 'react';
import './Footer.css'
import { assets } from '../../assets/frontend/assets';

const Footer = () => {
  return (
    <>
      <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" id='logo'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsa omnis placeat similique quidem a ab, dolor ipsum excepturi praesentium ipsam consectetur tempora tempore culpa delectus nemo laboriosam? Magnam, molestiae!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-6200973456</li>
                    <li>sanyog@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 © companySanyog.com All Right Reserved. </p>
      </div>
    </>
  );
}

export default Footer;
