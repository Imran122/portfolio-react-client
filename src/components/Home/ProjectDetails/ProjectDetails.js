import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Swiper from 'react-slider-swiper';
import "swiper/swiper-bundle.min.css";
import './ProjectDetails.css'
const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({})
    useEffect(() => {
        fetch(`https://myreactportfoliosite2.herokuapp.com/projects/${id}`)
            .then(response => response.json())
            .then(data => setProject(data))
    }, [])


    return (
        <>
            <main id="main">


                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Project Details</h2>
                            <ol>
                                <li>
                                    <Link to="/home"> <a href="#">Home</a></Link>
                                </li>
                                <li>Porject Details</li>
                            </ol>
                        </div>

                    </div>
                </section>


                <section id="portfolio-details" class="portfolio-details">
                    <div class="container">

                        <div class="row gy-4">

                            <div class="col-lg-8">
                                <div class="portfolio-details-slider swiper">
                                    <div class="swiper-wrapper align-items-center">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img src={project.picture1} alt="" />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={project.picture2} alt="" />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={project.picture3} alt="" />


                                            </Carousel.Item>
                                        </Carousel>



                                    </div>
                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: {project.category}</li>

                                        <li><strong>Project End date</strong>: {project.projectFinishDate}</li>
                                        <li><strong>Project URL</strong>:
                                            <Link>  <a href="#">{project.projectUrl}</a></Link>
                                        </li>
                                        <li><strong>GitHub Client:</strong>:
                                            <Link>  <a href="#">{project.githubClient}</a></Link>
                                        </li>
                                        <li><strong>GitHub Server:</strong>:
                                            <Link>  <a href="#">{project.gitHubServer}</a></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="portfolio-description">
                                    <h2>This is {project.name} details</h2>
                                    <p>
                                        {project.about}
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </>
    );
};

export default ProjectDetails;