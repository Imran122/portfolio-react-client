import React from 'react';
import './About.css'
import FadeIn from 'react-fade-in';
import img from '../../../images/profile-img.jpg'
const About = () => {
    return (
        <FadeIn>
            <section id="about" class="about">
                <div class="container">

                    <div class="section-title">
                        <h2>About</h2>
                        <p> I am a professional full stack web developer.I am adaptable with a quick learner and having sound
                            knowledge of Python and JavaScript programming language. possess of good knowledge in Node Js and Django web
                            frameworks. Also expertise in front-end development technology with React Js and Bootstrap5, Tailwind CSS with various
                            react tools. Proficient in handling various technical related queries and issues independently.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-4" data-aos="fade-right">
                            <img src={img} class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Full-Stack &amp; Web Developer.</h3>
                            <p class="fst-italic">
                                My personal Information.
                            </p>
                            <div class="row">
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 sep 1996</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+880 1682765544</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Dhaka, Bangladesh</span></li>
                                    </ul>
                                </div>
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>26</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor`s</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mdimranhossain122@gmail.com</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Looking forward to an entry-level position to kickstart my career. I am adaptable with a
                                quick learner and a highly hardworking individual searching for a position to gain
                                industrial exposure in this field. Being a quick learner, I wish to develop a more rounded
                                skill-set and wants to help further development of the organization. To work in a highly
                                competitive environment with a perfect challenge by contributing the best for the growth
                                of the organization while ensuring growth in a personal career will be a great opportunity
                                for me.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </FadeIn>
    );
};

export default About;