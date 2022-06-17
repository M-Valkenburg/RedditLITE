import React from 'react';
import './Card.css';
import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Card(props) {
    const { post } = props;


    let content;
    if (post.selftext !== "") {
        content = <div className="content-text"><ReactMarkdown remarkPlugins={[remarkGfm]}>{post.selftext}</ReactMarkdown></div>
    } else if (post.thumbnail !== "self") {
        content = <img src={post.thumbnail} alt="" height={post.thumbnail_height} width={post.thumbnail_width}/>
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

// export default function Card() {
//     return (
//         <div className="card">
//             <h2>Reddit logo in green</h2>
//             <span className="timestamp"><strong>&#xB7;</strong> u/foobar - 1 hour ago</span>
//             <img src="./images/logo.png" alt="Test"/>
//             <div className="post-info">
//                 <div className="votes">
//                     <span><FaArrowUp /></span>
//                     <p>&nbsp;&nbsp;356&nbsp;&nbsp;</p>
//                     <span><FaArrowDown /></span>
//                 </div>
//                 <div className="comments">
//                     <span><FaComment /></span>
//                     <p>&nbsp;34&nbsp;</p>
//                 </div>
//             </div>
//         </div>
//     )
// };