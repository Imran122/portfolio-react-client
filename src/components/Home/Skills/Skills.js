import React from 'react';
import './Skills.css'
const Skills = () => {

    return (
        <div data-aos="fade-right">
            <section id="skills" className="skills section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>I have good knowledge in Node Js and Django web
                            frameworks. Also expertise in front-end development technology with React Js and Bootstrap5, Tailwind CSS with various
                            react tools. Proficient in handling various technical related queries and issues independentlyGood knowledge with GitHub.
                            Excellent verbal and written communication skills.
                            Ability to adapt new technologies quickly.</p>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6" data-aos="fade-up">

                            <div className="progress">
                                <span className="skill">PYTHON <i className="val">60%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">JAVASCRIPT <i className="val">50%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">REACT JS <i className="val">50%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                            <div className="progress">
                                <span className="skill">DJANGO <i className="val">60%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">NODE JS <i className="val">50%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">WEB DESIGN <i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Skills;