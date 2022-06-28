import React from 'react';
import { useDispatch } from 'react-redux';
import './Card.css';
import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import moment from 'moment';
import { setSearchTerm } from '../../features/posts/redditSlice';

export default function Card({ post }) {
    const dispatch = useDispatch();
    let content;

    const toggleOverlay = () => {
        const div = document.getElementById(post.id);
        div.style.display = "none";
    }

    if (post.selftext !== "") {
        const expandText = () => {
            const div = document.getElementById(post.id + 'text');
            div.style.overflow = "none";
            div.style.maxHeight = '100%';
        }

        content = (
            <div className="text-container" id={post.id + 'text'} onClick={expandText}>
                <div className="content-text"><ReactMarkdown remarkPlugins={[remarkGfm]}>{post.selftext}</ReactMarkdown></div>
                <div className="text-overlay" id={post.id} onClick={toggleOverlay}></div>
            </div>
        )
    }
 
    if (post.post_hint === "image") {
        content = (
            <div className="image-container" onClick={toggleOverlay}>
                <img className="content-img" id="image" src={post.url} alt=""/>
                {post.over_18 && <div className="nsfw-content" id={post.id}><span>nsfw<br/>click to view</span></div>}
            </div>
        )
    }

    if (post.post_hint === "link" || post.url.includes('/gallery/') || post.post_hint === "rich:video") {
        const url = post.url;
        let trimmedLink;
    
        if (url.startsWith("https://www.")) {
            trimmedLink = url.replace("https://www.", "").substring(0, 20) + "...";
        } else if (url.startsWith("https://www-")) {
            trimmedLink = url.replace("https://www-", "").substring(0, 20) + "...";
        } else if (url.startsWith("https://")) {
            trimmedLink = url.replace("https://", "").substring(0, 20) + "...";
        }


        if (post.thumbnail === "default" || post.thumbnail === "nsfw") {
            content = <a target="_blank" href={url} alt={post.title} rel="noreferrer noopener">{trimmedLink}&nbsp;<FiExternalLink className="link-icon"/></a>
        } else {
            content = (            
                <div className="link-container">
                    <a target="_blank" href={url} alt={post.title} rel="noreferrer noopener">
                        <div className="thumbnail-container">
                            <img className="link-image" src={post.thumbnail} alt=""/>
                            {post.over_18 && <div className="nsfw-content"></div>}
                        </div>
                    </a>
                    <a target="_blank" href={url} alt={post.title} rel="noreferrer noopener">{trimmedLink}&nbsp;<FiExternalLink className="link-icon"/></a>
                </div>
            )
        }
    }

    if (post.post_hint === 'hosted:video') {
        content = ( 
            <div className="video-container" onClick={toggleOverlay}>
                <video className="content-video" src={post.media.reddit_video.fallback_url} controls/>
                {post.over_18 && <div className="nsfw-content" id={post.id}><span>nsfw<br/>click to view</span></div>}
            </div>
        )
    }

    return (
        <div className="card">
            {post.over_18 ? <h2>{post.title} <span className="nsfw-tag">nsfw</span></h2> : <h2>{post.title}</h2>}
            <span className="header-info">
                <strong onClick={() => dispatch(setSearchTerm(post.subreddit))}>{post.subreddit_name_prefixed}</strong> - Posted by {post.author}
            </span>
            {content}
            <div className="post-info">
                <div className="votes">
                    <span><FaArrowUp /></span>
                    <p>&nbsp;{post.ups}&nbsp;</p>
                    <span><FaArrowDown /></span>
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
