import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Header.css";
import { FaSearch } from 'react-icons/fa';
import logo from '../../images/logo.png';
import { setSubreddit } from '../../features/posts/redditSlice';

const Header = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.subreddits.searchTerm)
    
    const [searchValue, setSearchValue] = useState('');

    const getSearch = (e) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        setSearchValue(searchTerm);
      }, [searchTerm]);

    const setSearch = (e) => {
        if (searchValue.length === 0) {
            return
        }
        
        e.preventDefault();
        dispatch(setSubreddit(searchValue));
    };

    return (
        <header>
            <div className="logo" onClick={() => dispatch(setSubreddit('popular'))}>
                <img src={logo} alt="Reddit logo"/>
                <p>Reddit<span>LITE</span></p>
            </div>
            <div className="search">
                <form onSubmit={setSearch}>
                    <input type="text" placeholder="Search..." value={searchValue} onChange={getSearch}/>
                </form>
                <button type="submit" onSubmit={setSearch}><FaSearch /></button> 
            </div>
        </header>
    )
};

export default Header;
