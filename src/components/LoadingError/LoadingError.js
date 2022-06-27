import React from 'react';
import './LoadingError.css';
import error from '../../images/404.jpg';

export default function LoadingError() {
    return (
        <div className="loading-error">
            <h2>Uh oh, something has gone wrong!</h2>
            <p>
                The problem can either be a:
                <br/><br/>
                <strong>Loading error:</strong><br/>
                If the page does not load any posts at all then loading
                posts from Reddit might be blocked by tracking protection
                <br/><br/><br/>
                <strong>Search error:</strong><br/>
                The search term contains typos or the page you were looking for does not excist
            </p>
            <img src={error} alt="error"/>        
        </div>
    )
}
