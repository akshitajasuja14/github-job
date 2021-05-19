import React, { useContext, useState, useEffect } from 'react';
import JobItem from './JobItem';
import JobsContext from '../context/jobs';
const Posts = () => {
    const { results } = useContext(JobsContext);

    return (

        <div className="search-results">
            {results.map((job, index) => (
                <JobItem key={job.id} {...job} index={index} />
            ))}
        </div>
    );
};


export default Posts;