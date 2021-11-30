import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './Project.css'
const Project = (props) => {

    const { _id, name, picture1, about } = props.project;


    return (
        <>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                    <img src={picture1} class="img-fluid" alt="" />
                    <div class="portfolio-links">
                        <Link> <a href={picture1} data-gallery="portfolioGallery" class="portfolio-lightbox" title={name}><Icon icon="akar-icons:circle-plus" /></a></Link>

                        <Link to={`/projects/${_id}`}> <a title="More Details"><Icon icon="akar-icons:link-chain" /></a></Link>

                    </div>
                    <p> {about.split('').slice(0, 90).toString().replace(/,/g, '')}......</p>
                </div>
            </div>
        </>
    );
};

export default Project;