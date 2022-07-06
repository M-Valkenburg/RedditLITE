import React, { useState } from 'react';
import './Comment.css'
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import moment from 'moment';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Comments({ comment }) {
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

    return (
        <div className="comment">
            <strong>{comment.author}</strong><span> - {moment.unix(comment.created_utc).fromNow()}</span>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{comment.body}</ReactMarkdown>
            <div className="votes">
                <span onClick={() => handleVote(1)} className={upvote ? 'upvote-active' : 'upvote'} aria-label="upvote post"><ImArrowUp/></span>
                <p>&nbsp;{comment.ups + vote}&nbsp;</p>
                <span onClick={() => handleVote(-1)} className={downvote ? 'downvote-active' : 'downvote'} aria-label="downvote post"><ImArrowDown/></span>
            </div>
        </div>
    )
};
