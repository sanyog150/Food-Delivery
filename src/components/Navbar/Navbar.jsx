import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend/assets";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context";

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState('home');
    const {getTotalCartAmount} = useContext(UserContext)
    
  return (
    <>
      <div className="navbar">
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
        {/* <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>home</NavLink></li>
          <li><NavLink to='/menu' className={({ isActive }) => (isActive ? "active" : "")}>menu</NavLink></li>
          <li><NavLink to='/mobile-app' className={({ isActive }) => (isActive ? "active" : "")}>mobile-app</NavLink></li>
          <li><NavLink to='/contact-us' className={({ isActive }) => (isActive ? "active" : "")}>contact us</NavLink></li> */}
          <Link to="/" onClick={()=>setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</Link>
          <a href="#explore-menu" onClick={()=>setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
          <a href="#app-download" onClick={()=>setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</a>
          <a href="#footer" onClick={()=>setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link to='/cart'> <img src={assets.basket_icon} height={30} alt="" /></Link>
            <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
