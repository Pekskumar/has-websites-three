import React from "react";
import { NavLink, Link } from "react-router-dom";


const Header = () => {
  return (
    <>
    <a id="button"><i class="fas fa-chevron-up"></i></a>
    <div className="main-header nav-down">
    <div className="logo">
    <h1><NavLink to="/"><img src="./images/logo-header.png" /></NavLink></h1>
    </div>
    <div className="navbar">
    <ul className="main-menu ">
    <li><NavLink to="/">Home</NavLink></li>
    <li className="menu-item-has-children"><NavLink exact to="/about">About</NavLink>
      <ul className="submenu">
      <li><NavLink  to="/">Sub Menu 1</NavLink></li>
      <li><NavLink to="/">Sub Menu 1</NavLink></li>
      <li className="menu-item-has-children"><NavLink to="/">Sub Menu 1</NavLink>
      <ul className="submenu">
      <li><NavLink to="/">Sub Menu 2</NavLink></li>
      <li><NavLink to="/">Sub Menu 2</NavLink></li>
      <li><NavLink to="/">Sub Menu 2</NavLink></li>
      <li><NavLink to="/">Sub Menu 2</NavLink></li>
      </ul>
      </li>
      <li><NavLink to="/">Sub Menu 1</NavLink></li>
      <li><NavLink to="/">Sub Menu 1</NavLink></li>
      </ul>
    </li>
    <li><NavLink to="/Service">Services</NavLink>
    <ul className="submenu">
    <li><NavLink to="/">Career</NavLink></li> 
    </ul>
    </li>
    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>

    <div className="nav-call">
    
    
    <NavLink className="primary-btn" to="/About">Inquiry Now<span></span></NavLink>
    </div>

    <div className="hamburger" id="hamburger-10">
    <span className="line"></span>
    <span className="line"></span>
    <span className="line"></span>
    </div>
    </div>
    </div>

    </>
    );
  };

  export default Header;