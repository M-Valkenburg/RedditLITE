import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card/Card';
import { fetchPosts, selectPosts, isLoading, hasError } from './redditSlice';


export default function Reddit() {
    const posts = useSelector(selectPosts);
    const loadingPosts = useSelector(isLoading);
    const failedLoading = useSelector(hasError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    if (loadingPosts) {
        return <h2>Loading posts...</h2>
    }

    if (failedLoading) {
        return <h2>Uh oh, something has gone wrong!<br/>Unable to load posts.</h2>
    }

    const displayedPosts = posts?.map(post => {
        return(
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
