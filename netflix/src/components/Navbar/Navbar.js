
import React from 'react';
import "./Navbar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
            <div className="left">
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My list</span>
            </div>
        
            <div className="right">
               <FaSearch className='icon' />
              <span>Kids</span>
              <IoIosNotificationsOutline className='icon' />
               <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
            
            <div className="profile">
               <IoIosArrowDropdownCircle className='icon' />
              <div className="options">
                <span className='option-item'>settings</span>
                <span className='option-item'>Login</span>
                <span className='option-item'>logout</span>
              </div>
            </div>

            </div>




      </div>
      
    </div>
  );
}

export default Navbar;
