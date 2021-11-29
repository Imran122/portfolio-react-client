
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../../shared/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <main id="main">
                <About></About>
                <Skills></Skills>
                <Resume></Resume>
                <Portfolio></Portfolio>
                <Contact></Contact>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;