import React from 'react';
import { useDispatch } from 'react-redux';
import './SubredditsCard.css';
import logo from '../../images/logo.png';
import { setSearchTerm } from '../../features/posts/redditSlice';

export default function Subreddits({ subs }) {
    const dispatch = useDispatch();

    const displayedSubs = subs?.map(sub => {
        return (
            <li key={sub.id} onClick={() => dispatch(setSearchTerm(sub.display_name))}>
                <img
                    className="subreddit-icon"
                    src={sub.icon_img || logo} 
                    alt={sub.display_name}
                />
                {sub.display_name_prefixed}
            </li>
        )
    });

    return (
        <div className="subreddits">
            <h3>Subreddits</h3>
            <ul className="subs">
                {displayedSubs}
            </ul>
        </div>
    )
};
