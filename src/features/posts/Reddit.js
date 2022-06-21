import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import { fetchPosts, selectPosts, isLoading, hasError } from './redditSlice';


export default function Reddit() {
    const posts = useSelector(selectPosts);
    const loadingPosts = useSelector(isLoading);
    const failedLoading = useSelector(hasError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

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
            {loadingPosts && <Loader />}
            {failedLoading && <h2>Uh oh, something has gone wrong!<br/>Unable to load posts.</h2>}
            {displayedPosts}
        </div>      
    )
};
