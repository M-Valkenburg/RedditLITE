import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SubredditsCard.css';
import Loader from '..//Loader/Loader';
import LoadingError from '..//LoadingError/LoadingError';
import logo from '../../images/logo.png';
import { setSubreddit } from '../../features/posts/redditSlice';

export default function Subreddits({ subs }) {
    const dispatch = useDispatch();

    const subreddit = useSelector((state) => state.reddit);
    const { isLoading, hasError } = subreddit;

    const displayedSubs = subs?.map(sub => {
        return (
            <li key={sub.id} onClick={() => dispatch(setSubreddit(sub.display_name))}>
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
                {isLoading
                    ? <Loader />
                    : hasError
                        ? <LoadingError />
                        : displayedSubs}
            </ul>
        </div>
    )
};
