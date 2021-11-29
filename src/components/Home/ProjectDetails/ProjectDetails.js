import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import Swiper from 'react-slider-swiper';
import "swiper/swiper-bundle.min.css";
import './ProjectDetails.css'
const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({})
    useEffect(() => {
        fetch(`http://myreactportfoliosite2.herokuapp.com/projects/${id}`)
            .then(response => response.json())
            .then(data => setProject(data))
    }, [])
    console.log(project)
    const params = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        runCallbacksOnInit: true,
        onInit: (swiper) => {
            this.swiper = swiper
        }
    }
    return (
        <>
            <main id="main">


                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Portfoio Details</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Portfoio Details</li>
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
                                        <Swiper
                                            {...params}
                                        >


                                            <div class="swiper-slide">
                                                <img src={project.picture1} alt="" />

                                            </div>



                                            <div class="swiper-slide">
                                                <img src={project.picture2} alt="" />
                                            </div>



                                            <div class="swiper-slide">
                                                <img src={project.picture3} alt="" />
                                            </div>







                                        </Swiper>




                                    </div>
                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: Web design</li>
                                        <li><strong>Client</strong>: ASU Company</li>
                                        <li><strong>Project date</strong>: 01 March, 2020</li>
                                        <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                                    </ul>
                                </div>
                                <div class="portfolio-description">
                                    <h2>This is {project.name} details</h2>
                                    <p>
                                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
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