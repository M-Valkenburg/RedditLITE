import React from 'react';
import './Card.css';
import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa'

export default function Card(props) {
    const { post } = props;

    return (
            <div className="card">
                <h2>{post.title}</h2>
                <span className="timestamp"><strong>{post.subreddit_name_prefixed}</strong> - Posted by {post.author}</span>
                <img src="./images/logo.png" alt="Test"/>
                <div className="post-info">
                    <div className="votes">
                        <span><FaArrowUp /></span>
                        <p>&nbsp;&nbsp;{post.ups}&nbsp;&nbsp;</p>
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