import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SubredditsCard from '../../components/SubredditsCard/SubredditsCard';
import { fetchSubreddits, selectSubreddits } from './subredditsSlice';

export default function SubReddits() {
    const subs = useSelector(selectSubreddits);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch])

    return (
        <div>
            <SubredditsCard subs={subs} />
        </div>      
    )
}
