import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Header.css";
import { FaSearch } from 'react-icons/fa';
import logo from '../../images/logo.png';
import { setSearchTerm } from '../../features/posts/redditSlice';

const Header = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.subreddits.searchTerm)
    
    const [searchValue, setSearchValue] = useState('');

    const getSearch = (e) => {
        setSearchValue(e.target.value)
    };

    useEffect(() => {
        setSearchValue(searchTerm);
      }, [searchTerm]);

    const setSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchValue));
    };

    return (
        <header>
            <div className="logo" onClick={() => dispatch(setSearchTerm('popular'))}>
                <img src={logo} alt="Reddit logo"/>
                <p>Reddit<span>LITE</span></p>
            </div>
            <form className="search" onSubmit={setSearch}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm} 
                    onChange={getSearch}
                    required
                />
                <button type="submit" aria-label="search subreddits" onSubmit={setSearch}><FaSearch /></button> 
            </form>  
        </header>
    )
};

export default Header;
