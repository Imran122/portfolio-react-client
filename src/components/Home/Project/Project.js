import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './Project.css'
import { Button } from 'react-bootstrap';
const Project = (props) => {

    const { _id, name, picture1, about, category, projectFinishDate } = props.project;


    return (
        <>





            <div class="col-md-4" >
                <div class="blog-card blog-card-blog">
                    <div class="blog-card-image">
                        <a href="#"> <img class="img" src={picture1} /> </a>
                        <div class="ripple-cont"></div>
                    </div>
                    <div class="blog-table">
                        <h6 class="blog-category blog-text-success"><i class="far fa-newspaper"></i> {category}</h6>
                        <h4 class="blog-card-caption">
                            <Link to={`/projects/${_id}`} ><h4>{name}</h4></Link>

                        </h4>
                        <p class="blog-card-description">{about.split('').slice(0, 90).toString().replace(/,/g, '')}.......</p>
                        <div class="ftr">
                            <div class="author">
                                <Link to={`/projects/${_id}`} class="service-card"><p>DETAILS</p></Link>
                            </div>
                            <div class="stats"> <i class="far fa-clock"></i> {projectFinishDate} </div>
                        </div>
                    </div>
                </div>
            </div>







            {/*  <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                    <img src={picture1} class="img-fluid" alt="" width="100%" height="100%" />
                    <h4>{name}</h4>
                    <p> {about.split('').slice(0, 90).toString().replace(/,/g, '')}......</p>
                    <div class="button-class-main">
                        <Link to={`/projects/${_id}`} class="service-card"><p>DETAILS</p></Link>
                    </div>
                </div>
            </div> */}

        </>
    );
};

export default Project;