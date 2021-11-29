import React from 'react';
import './Banner.css'
import TypeAnimation from 'react-type-animation';
import AOS from 'aos'
const Banner = () => {
    AOS.init()
    return (
        <div >

            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="hero-container" data-aos="fade-in">
                    <h1 data-aos="fade-right" >Alex Smith</h1>
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
                </div>
            </section>
        </div>
    );
};

export default Banner;