import React from 'react';
import './Banner.css'
import TypeAnimation from 'react-type-animation';
import AOS from 'aos'
import { Button } from 'react-bootstrap';
import Pdf from '../../../resume/IMRAN HOSSAIN.pdf';
const Banner = () => {
    AOS.init()
    return (
        <div >

            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="hero-container" data-aos="fade-in">
                    <h1 data-aos="fade-right" >IMRAN HOSSAIN</h1>
                    <div style={{ width: '20em', color: 'white' }} >
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                'Full-stack developer',
                                2000,
                                'Django developer',
                                2000,
                            ]}
                            wrapper="h2"
                            repeat={Infinity}
                        />
                    </div>
                    <a href={Pdf} without rel="noopener noreferrer" target="_blank" >
                        <Button variant="outline-light" trailingIcon="picture_as_pdf" label="Resume">
                            RESUME
                        </Button>
                    </a>
                </div>

            </section>
        </div>
    );
};

export default Banner;