import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Card.css';
import { BsFillPinAngleFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa'
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import moment from 'moment';
import ContentLoader from './ContentLoader';
import { setSearchTerm } from '../../features/posts/redditSlice';

export default function Card({ post }) {
    const dispatch = useDispatch();

    const [ vote, setVote ] = useState(0);
    const [ upvote, setUpvote ] = useState(false);
    const [ downvote, setDownvote ] = useState(false);

    const handleVote = (value) => {
        if (value === 1) {
            setVote(+1);
            setUpvote(true);
            setDownvote(false)        
        } else if (value === -1) {
            setVote(-1);
            setDownvote(true);
            setUpvote(false);
        }
    } 

    useEffect(() => {
        setVote(vote);
    }, [vote]);

    return (
        <div className="card">
            {post.over_18 ? <h2>{post.title} <span className="nsfw-tag">nsfw</span></h2> : <h2>{post.title}</h2>}
            <span className="header-info">
                <strong onClick={() => dispatch(setSearchTerm(post.subreddit))}>{post.subreddit_name_prefixed}</strong> - Posted by {post.author}
                {post.stickied && <BsFillPinAngleFill className="pinned"/>}
            </span>
            
            <ContentLoader post={post}/>
            <div className="post-info">
                <div className="votes">
                    <span onClick={() => handleVote(1)} className={upvote && 'upvote-active'}><ImArrowUp/></span>
                    <p>&nbsp;{post.ups + vote}&nbsp;</p>
                    <span onClick={() => handleVote(-1)} className={downvote && 'downvote-active'}><ImArrowDown/></span>
                </div>
                <span className="time-ago">{moment.unix(post.created_utc).fromNow()}</span>
                <div className="comments">
                    <span><FaComment /></span>
                    <p>&nbsp;{post.num_comments}&nbsp;</p>
                </div>
            </div>
        </div>
    )
};
