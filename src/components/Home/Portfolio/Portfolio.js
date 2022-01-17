import React from 'react';
import './Portfolio.css'
import portfolio1 from '../../../images/portfolio/portfolio-1.jpg'
import portfolio2 from '../../../images/portfolio/portfolio-2.jpg'
import useProjects from '../../../hooks/useProjects';
import Project from '../Project/Project';
import { Icon } from '@iconify/react';
const Portfolio = () => {
    const [projects, setProjects] = useProjects()
    console.log(projects)
    return (
        <>
            <section id="portfolio" class="portfolio section-bg">
                <div class="container">

                    <div class="section-title">
                        <h2>Portfolio</h2>
                        <p>I am a big fan of learning while building. I have created multiple projects, some of them are my professional projects and some of them are experimental just to explore & learn.Here is my recent work that i have done with React Js, Node Js and Django.</p>
                    </div>


                    <section class="we-offer-area text-center bg-gray">
                        <div class="container">
                            <div class="row" data-aos="fade-up">
                                <div class="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">
                                        <li data-filter="*" class="filter-active">All</li>
                                        <li data-filter=".filter-app">Django& React</li>
                                        <li data-filter=".filter-card">Node & React</li>
                                        <li data-filter=".filter-card">Web Design</li>


                                    </ul>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">




                                    {projects.map((project) => <Project
                                        key={project._id}
                                        project={project}
                                    >

                                    </Project>
                                    )}


                                </div>
                            </div>
                        </div>
                    </section>



                </div>
            </section>
        </>
    );
};

export default Portfolio;