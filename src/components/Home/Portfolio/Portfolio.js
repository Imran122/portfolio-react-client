import React, { useState } from 'react';
import './Portfolio.css'

import useProjects from '../../../hooks/useProjects';
import Project from '../Project/Project';
import { Icon } from '@iconify/react';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
const Portfolio = () => {
    const [projects, setProjects] = useProjects()
    const [showResults, setShowResults] = useState(false)
    const [items, setItems] = useState(projects)

    const filterDjango = (categoryItem) => {
        setShowResults(true)
        const updateItems = projects.filter((currentElement) => {
            return currentElement.category === categoryItem
        })
        setItems(updateItems)
    }
    console.log('items', items)
    console.log('projects', projects)


    /*  let uniqueList = projects.filter(list => 'django' === list.category)
     console.log(uniqueList) */

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
                                        <li data-filter=".filter-app" onClick={() => setItems(projects)} ><Button class="select-cat-btn">ALL</Button></li>
                                        <li data-filter=".filter-app" onClick={() => filterDjango('django')} ><Button class="select-cat-btn">Django & React</Button></li>
                                        <li data-filter=".filter-app" onClick={() => filterDjango('node')} ><Button class="select-cat-btn">Node & React</Button></li>




                                    </ul>
                                </div>
                            </div>
                            <div class="container" >
                                <div class="row">
                                    {!showResults ?



                                        projects.map(project => <Project
                                            key={project._id}
                                            project={project}
                                        >

                                        </Project>
                                        )
                                        :
                                        items.map(project => <Project
                                            key={project._id}
                                            project={project}
                                        >

                                        </Project>
                                        )
                                    }










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