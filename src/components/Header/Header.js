import React from 'react';
import { useDispatch } from 'react-redux';
import "./Header.css";
import { FaSearch } from 'react-icons/fa';
import logo from '../../images/logo.png';
import { setSubreddit } from '../../features/posts/redditSlice';

const Header = () => {
    const dispatch = useDispatch();
    
    return (
        <header>
            <div className="logo" onClick={() => dispatch(setSubreddit('popular'))}>
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
