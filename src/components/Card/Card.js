import React, { useState, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import './Card.css';
import { BsFillPinAngleFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa'
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import moment from 'moment';
import ContentLoader from './ContentLoader';
import Comment from './Comment';
import LoaderSmall from '../Loader/LoaderSmall';
import { setSearchTerm } from '../../features/posts/redditSlice';

export default function Card({ post, loadComments }) {
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

    const toggleComments = () => {
        const div = document.getElementById(post.id + 'comments');
        loadComments(post.permalink, post.id);
        div.style.display = "initial";
    }

    const displayedComments = post.comments.map(comment => {
        return (
            <Suspense key={comment.id}>
                <Comment
                    comment={comment}
                />
            </Suspense>
        )
    })

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
                    <span onClick={() => handleVote(1)} className={upvote ? 'upvote-active' : 'upvote'} aria-label="upvote post"><ImArrowUp/></span>
                    <p>&nbsp;{post.ups + vote}&nbsp;</p>
                    <span onClick={() => handleVote(-1)} className={downvote ? 'downvote-active' : 'downvote'} aria-label="downvote post"><ImArrowDown/></span>
                </div>
                <span className="time-ago">{moment.unix(post.created_utc).fromNow()}</span>
                <div className="comments" onClick={toggleComments} aria-label="show comments">
                    <span><FaComment /></span>
                    <p>&nbsp;{post.num_comments}&nbsp;</p>
                </div>
            </div>       
            <div className="comment-section" id={post.id + 'comments'}>
                {post.commentsLoading ? <LoaderSmall /> : displayedComments}
            </div>
        </div>
    )
};
