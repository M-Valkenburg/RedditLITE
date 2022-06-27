import React from 'react';
import './LoadingSubsError.css';
import error from '../../images/error.png';

export default function LoadingSubsError() {
    return (
        <div className="loading-subs-error">
            <h2>Uh oh, something has gone wrong!</h2>
            <p>
                <strong>Unable to load Subreddits</strong><br/>
                Loading Subreddits from Reddit might be blocked by tracking protection
            </p>
            <img src={error} alt="error"/>        
        </div>
    )
}
