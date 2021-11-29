import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
const Project = (props) => {
    const history = useHistory()
    const { _id, name, picture1, about } = props.project;
    const handelButton = () => {
        history.push(`/projects/${_id}`)
    }

    return (
        <>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                    <img src={picture1} class="img-fluid" alt="" />
                    <div class="portfolio-links">
                        <Link to={`/projects/${_id}`}> <a title="More Details"><Icon icon="akar-icons:link-chain" /></a></Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;