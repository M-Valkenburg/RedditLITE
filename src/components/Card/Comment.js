import React from 'react';
import './Comment.css'
import moment from 'moment';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Comments({ comment }) {
    return (
        <div className="comment">
            <strong>{comment.author}</strong><span> - {moment.unix(comment.created_utc).fromNow()}</span>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{comment.body}</ReactMarkdown>
        </div>
    )
};
