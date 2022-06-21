import React from 'react';
import "./Header.css";
import { FaSearch } from 'react-icons/fa';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Reddit logo"/>
                <p>Reddit<span>LITE</span></p>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..."/>
                <button type="submit"><FaSearch /></button> 
            </div>
        </header>
    )
};

export default Header;
