import React from 'react';
import './Portfolio.css'
import portfolio1 from '../../../images/portfolio/portfolio-1.jpg'
import portfolio2 from '../../../images/portfolio/portfolio-2.jpg'
import useProjects from '../../../hooks/useProjects';
import Project from '../Project/Project';

const Portfolio = () => {
    const [projects, setProjects] = useProjects()

    return (
        <>
            <section id="portfolio" class="portfolio section-bg">
                <div class="container">

                    <div class="section-title">
                        <h2>Portfolio</h2>
                        <p>Here is my recent work that i have done with React and Django and Node Js.</p>
                    </div>

                    <div class="row" data-aos="fade-up">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".filter-app">Django App</li>
                                <li data-filter=".filter-card">React App</li>

                            </ul>
                        </div>
                    </div>

                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                        {projects.map((project) => <Project
                            key={project._id}
                            project={project}
                        >

                        </Project>
                        )}



                    </div>

                </div>
            </section>
        </>
    );
};

export default Portfolio;