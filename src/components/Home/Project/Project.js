import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './Project.css'
import { Button } from 'react-bootstrap';
const Project = (props) => {

    const { _id, name, picture1, about } = props.project;


    return (
        <>

            <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                    <img src={picture1} class="img-fluid" alt="" width="100%" height="100%" />
                    <h4>{name}</h4>
                    <p> {about.split('').slice(0, 90).toString().replace(/,/g, '')}......</p>
                    <div class="button-class-main">
                        <Link to={`/projects/${_id}`} class="service-card"><p>DETAILS</p></Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Project;