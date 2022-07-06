import React from 'react';
import './ContentLoader.css';
import { FiExternalLink } from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ContentLoader({ post }) {
    const toggleOverlay = () => {
        const div = document.getElementById(post.id);
        div.style.display = "none";
    }

    const expandText = () => {
        const div = document.getElementById(post.id + 'text');
        div.style.overflow = "none";
        div.style.maxHeight = '100%';
    }

    if (!post.hint && post.url.includes('www.reddit.com') && !post.is_gallery) {
        return (
            <div className="text-container" id={post.id + 'text'} onClick={expandText}>
                <div className="content-text"><ReactMarkdown remarkPlugins={[remarkGfm]}>{post.selftext}</ReactMarkdown></div>
                <div className="text-overlay" id={post.id} onClick={toggleOverlay}></div>
            </div>
        )
    }

    if (post.selftext !== "") {
        return (
            <div className="text-container" id={post.id + 'text'} onClick={expandText}>
                <div className="content-text"><ReactMarkdown remarkPlugins={[remarkGfm]}>{post.selftext}</ReactMarkdown></div>
                <div className="text-overlay" id={post.id} onClick={toggleOverlay}></div>
            </div>
        )
    }
 
    if (post.post_hint === "image") {
        return (
            <div className="image-container" onClick={toggleOverlay}>
                <img className="content-img" src={post.url} alt="" loading="lazy" decoding="async"/>
                {post.over_18 && <div className="nsfw-content" id={post.id}><span>nsfw<br/>click to view</span></div>}
            </div>
        )
    }

    if (post.post_hint === 'hosted:video') {
        return ( 
            <div className="video-container" onClick={toggleOverlay}>
                <video className="content-video" src={post.media.reddit_video.fallback_url} preload="metadata" controls/>
                {post.over_18 && <div className="nsfw-content" id={post.id}><span>nsfw<br/>click to view</span></div>}
            </div>
        )
    }

    if (post.post_hint === "link" || post.is_gallery === true || post.post_hint === "rich:video" || !post.hint) {
        const url = post.url;
        let trimmedLink;
    
        if (url.startsWith("https://www.")) {
            trimmedLink = url.replace("https://www.", "").substring(0, 20) + "...";
        } else if (url.startsWith("https://www-")) {
            trimmedLink = url.replace("https://www-", "").substring(0, 20) + "...";
        } else if (url.startsWith("https://")) {
            trimmedLink = url.replace("https://", "").substring(0, 20) + "...";
        }


        if (post.thumbnail === "default" || post.thumbnail === "nsfw" || post.thumbnail === "") {
            return (
                <a target="_blank" href={url} alt={post.title} rel="noreferrer noopener">{trimmedLink}&nbsp;<FiExternalLink className="link-icon"/></a>
            )
        } else {
            return (            
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

};
