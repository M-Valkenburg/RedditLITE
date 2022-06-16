import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { selectPosts, isLoading, hasError } from './redditSlice';


export default function Reddit() {
    const posts = useSelector(selectPosts);
    const loadingPosts = useSelector(isLoading);
    const failedLoading = useSelector(hasError);

    if (loadingPosts) {
        return <h2>Loading posts...</h2>
    }

    if (failedLoading) {
        return <h2>Uh oh, something has gone wrong!<br/>Unable to load posts.</h2>
    }

    const displayedPosts = posts.map(post => {
        return (
            <Card 
                key={post.id}
                post={post}
            />
        )
    })

    return (
        <div>
            {displayedPosts}
        </div>      
    )
};
