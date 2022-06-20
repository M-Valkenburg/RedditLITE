import React from 'react';
import './Card.css';
import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Card(props) {
    const { post } = props;
    let content;

    if (post.selftext !== "") {
        content = <div className="text-container">
                    <div className="content-text"><ReactMarkdown remarkPlugins={[remarkGfm]}>{post.selftext}</ReactMarkdown></div>
                    <div className="text-overlay"></div>
                  </div>
    }
   
    if (post.thumbnail !== "self") {
        const url = post.url
        const regex = new RegExp(/\.(jpe?g|png|gif|bmp|webp)$/i);

        if (regex.test(url)) {
            content = <img className="content-img" src={post.url} alt=""/>
        } else {
            if (post.thumbnail === "default") {
                content = <a href={post.url} alt={post.title}>{post.url}</a>
            } else {
                content = (            
                    <div className="content-link">
                        <img src={post.thumbnail} alt=""/>
                        <a href={post.url} alt={post.title}>{post.url}</a>
                    </div>
                )
            }
        }
    }

    if (post.is_video) {
        content = <video className="content-video" src={post.media.reddit_video.fallback_url} controls="on"/>
    }

    return (
            <div className="card">
                <h2>{post.title}</h2>
                <span className="timestamp"><strong>{post.subreddit_name_prefixed}</strong> - Posted by {post.author}</span>
                {content}
                <div className="post-info">
                    <div className="votes">
                        <span><FaArrowUp /></span>
                        <p>&nbsp;{post.ups}&nbsp;</p>
                        <span><FaArrowDown /></span>
                    </div>
                    <div className="comments">
                        <span><FaComment /></span>
                        <p>&nbsp;{post.num_comments}&nbsp;</p>
                    </div>
                </div>
            </div>
    )
};
