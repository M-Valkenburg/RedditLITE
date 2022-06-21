import React from 'react';
import './Card.css';
import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
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
   
    if (post.post_hint === "image") {
            content = (
                <div className="image-container">
                    <img className="content-img" src={post.url} alt=""/>
                    <div className="image-overlay"><span>SEE FULL IMAGE</span></div>
                </div>
            )
    }

    if (post.post_hint === "link" || post.url.includes('/gallery/')) {
        const url = post.url;
        let trimmedLink;
    
        if (url.startsWith("https://www.")) {
            trimmedLink = url.replace("https://www.", "").substring(0, 20) + "...";
        } else if (url.startsWith("https://www-")) {
            trimmedLink = url.replace("https://www-", "").substring(0, 20) + "...";
        } else if (url.startsWith("https://")) {
            trimmedLink = url.replace("https://", "").substring(0, 20) + "...";
        }


        if (post.thumbnail === "default") {
            content = <a target="_blank" href={url} alt={post.title} rel="noreferrer noopener">{trimmedLink}&nbsp;<FiExternalLink className="link-icon"/></a>
        } else {
            content = (            
                <div className="content-link">
                    <a target="_blank" href={url} alt={post.title} rel="noreferrer noopener">
                        <div className="thumbnail-container">
                            <img className="link-image" src={post.thumbnail} alt=""/>
                        </div>
                    </a>
                    <a target="_blank" href={url} alt={post.title} rel="noreferrer noopener">{trimmedLink}&nbsp;<FiExternalLink className="link-icon"/></a>
                </div>
            )
        }
    }  

    if (post.is_video) {
        content = <video className="content-video" src={post.media.reddit_video.fallback_url} controls="on"/>
    }

    return (
            <div className="card">
                {(post.over_18) ? <h2>{post.title} <span className="nsfw-tag">nsfw</span></h2> : <h2>{post.title}</h2>}
                <span className="header-info"><strong>{post.subreddit_name_prefixed}</strong> - Posted by {post.author}</span>
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
