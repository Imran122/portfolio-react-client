import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css'
const Blog = () => {
    return (
        <main id="main">


            <div class="col-lg-12 col-md-12 portfolio-item filter-app">
                <div class="blog-wrap">

                    <p>comming soon blog!</p>
                    <Link to="/home">  <ButtonGroup variant="warning">home</ButtonGroup>{' '}</Link>
                </div>
            </div>
        </main>

    );
};

export default Blog;