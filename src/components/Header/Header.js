import React from 'react';
import "./Header.css";
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="./images/logo.png" alt="Reddit logo"/>
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