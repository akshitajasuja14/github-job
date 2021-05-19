import React, { useContext, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import JobItem from './JobItem';
import JobsContext from '../context/jobs';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';
import { Container, Spinner, Form, Button, Row, Col } from 'react-bootstrap';
import { render } from 'react-dom';

const Results = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='container mt-5'>

            <Posts posts={currentPosts} loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
};


export default Results;