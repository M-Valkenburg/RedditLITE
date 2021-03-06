import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import LoadingError from '../../components/LoadingError/LoadingError';
import { fetchPosts, selectPosts, getComments } from './redditSlice';

const Card = React.lazy(() => import ('../../components/Card/Card'))

export default function Reddit() {
    const posts = useSelector(selectPosts);

    const reddit = useSelector((state) => state.reddit);
    const { isLoading, hasError, subreddit, searchTerm } = reddit;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(subreddit));
    }, [dispatch, subreddit])

    useEffect(() => {
        if (searchTerm === '') {
            return
        };
        dispatch(fetchPosts(searchTerm));
    }, [dispatch, searchTerm])

    const loadComments = (permalink, id) => {
        const findPost = posts.find(post => post.id === id);
        const index = posts.indexOf(findPost);
        dispatch(getComments(index, permalink));
    };

    const displayedPosts = posts?.map(post => {
        return (
            <Suspense key={post.id} >
                <Card 
                    post={post}
                    loadComments={loadComments}
                />
            </Suspense>
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
