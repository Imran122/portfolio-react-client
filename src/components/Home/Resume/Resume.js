import React from 'react';
import { Button } from 'react-bootstrap';
import Pdf from '../../../resume/IMRAN HOSSAIN.pdf';

import './Resume.css'
const Resume = () => {
    return (
        <>
            <section id="resume" class="resume">
                <div class="container">

                    <div class="section-title">
                        <div className="d-flex flex-row inline-flex">


                            <a href={Pdf} without rel="noopener noreferrer" target="_blank" >
                                <Button className="w-100" variant="outline-dark" trailingIcon="picture_as_pdf" label="Resume">
                                    RESUME
                                </Button>
                            </a>
                        </div>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-6" data-aos="fade-up">
                            <h3 class="resume-title">Summary</h3>
                            <div class="resume-item pb-0">
                                <h4>Imran Hossain</h4>
                                <p><em>Looking forward to an entry-level position to kickstart my career. I am adaptable with a quick learner and having sound
                                    knowledge of Python and JavaScript programming language. possess of good knowledge in Node Js and Django web
                                    frameworks. Also expertise in front-end development technology with React Js and Bootstrap5, Tailwind CSS with various
                                    react tools. Proficient in handling various technical related queries and issues independently.</em></p>
                                <ul>
                                    <li>Adabor,dhaka,bangladesh</li>
                                    <li>+880 1682765544</li>
                                    <li>mdimranhossain122@gmail.com</li>
                                </ul>
                            </div>

                            <h3 class="resume-title">Education</h3>
                            <div class="resume-item">
                                <h4>: Bachelor’s in Computer
                                    Science &amp; engineering</h4>
                                <h5>2015 - 2019</h5>
                                <p><em>Daffodil International
                                    University</em></p>
                                <p>I have completed my bachelor degree from Daffodil International University and have done some research paper during my study period.</p>
                            </div>
                            <div class="resume-item">


                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 class="resume-title">Professional Experience</h3>
                            <div class="resume-item">
                                <h4>Senior graphic design specialist</h4>
                                <h5>2019 - Present</h5>
                                <p><em>Experion, New York, NY </em></p>
                                <ul>
                                    <li> Have done some project by Django framework which is uploaded in
                                        my GitHub profile.</li>
                                    <li> Have worked in a research base project on image processing that can
                                        detect pest and the conference organized by teerthanker mahaveer
                                        university. Paper has published in IEEE Explore and RESEARCH
                                        GATE.
                                        IEEE Explore: http://tiny.cc/v28ysz
                                        ResearchGate: http://tiny.cc/a38ysz </li>
                                    <li> Experience on responsive web design & development project.</li>
                                    <li> Experience on Node Js and React Js to build React component-based
                                        website</li>
                                </ul>
                            </div>
                            {/*     <div class="resume-item">
                                <h4>Graphic design specialist</h4>
                                <h5>2017 - 2018</h5>
                                <p><em>Stepping Stone Advertising, New York, NY</em></p>
                                <ul>
                                    <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Resume;