import React from 'react';
import './LoadingError.css';
import error from '../../images/error.png';

export default function LoadingError() {
    return (
        <div className="loading-error">
            <h2>Uh oh, something has gone wrong!</h2>
            <p>
                <strong>Unable to load posts</strong><br/>
                Loading posts from Reddit might be blocked by tracking protection
            </p>
            <img src={error} alt="error"/>        
        </div>
    )
}
