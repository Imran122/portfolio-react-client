import React from 'react';
import './Banner.css'
import TypeAnimation from 'react-type-animation';
import AOS from 'aos'
import { Button } from 'react-bootstrap';
import Pdf from '../../../resume/IMRAN HOSSAIN.pdf';
const style = {
    width: '20em',
    color: '#5FCB71',
    fontFamily: 'Kanit',
    fontFamily: 'Mochiy Pop One',
}
const Banner = () => {
    AOS.init()
    return (
        <div >

            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container col-md-6 col-sm-6 equal-height" data-aos="fade-in">
                    <h1 data-aos="fade-right" >IMRAN HOSSAIN</h1>
                    <div className="change-text" style={style}>
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