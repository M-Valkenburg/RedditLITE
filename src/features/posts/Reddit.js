import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import LoadingError from '../../components/LoadingError/LoadingError';
import { fetchPosts, selectPosts } from './redditSlice';

export default function Reddit() {
    const posts = useSelector(selectPosts);

    const reddit = useSelector((state) => state.reddit);
    const { isLoading, hasError, subreddit } = reddit;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(subreddit));
    }, [dispatch, subreddit])

    const displayedPosts = posts?.map(post => {
        return (
            <Card 
                key={post.id} 
                post={post}
            />
        )
    })

    return (
        <div>
            {isLoading 
                ? <Loader /> 
                : hasError 
                    ? <LoadingError /> 
                    : displayedPosts
            }
        </div>      
    )
};
