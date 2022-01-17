import React from 'react';
import img from '../../../images/s.jpg'
import { Icon } from '@iconify/react';
import './Header.css'
import { Button } from 'react-bootstrap';
import Pdf from '../../../resume/IMRAN HOSSAIN.pdf';
import { a } from 'react-router-dom';

const Header = () => {

    const select = (el, all = false) => {

        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }


    const nabmobile = () => {
        select('body').classList.toggle('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
    }







    return (
        <>
            <buton id="menu-bars" onClick={nabmobile} class="mobile-nav-toggle d-xl-none">
                <Icon className="bi-list" icon="bi:list" />
            </buton>

            <header id="header">
                <div class="d-flex flex-column">

                    <div class="profile">
                        <img src={img} alt="" class="img-fluid rounded-circle" />
                        <h1 class="text-light"><a href="index.html">IMRAN HOSSAIN</a></h1>
                        <div class="social-links mt-3 text-center">
                            <a href="#" class="twitter"><Icon icon="bx:bxl-twitter" /></a>
                            <a href="#" class="facebook"><Icon icon="bi:facebook" /></a>
                            <a href="#" class="instagram"><Icon icon="akar-icons:instagram-fill" /></a>
                            <a href="#" class="github"><Icon icon="akar-icons:github-fill" /></a>
                            <a href="#" class="linkedin"><Icon icon="entypo-social:linkedin-with-circle" /></a>
                        </div>
                    </div>

                    <nav id="navbar" class="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" class="nav-link scrollto active"><Icon style={{ width: '40px' }} class="bx" icon="mdi:home" /> <span>Home</span></a></li>
                            <li><a href="#about" class="nav-link scrollto"><Icon style={{ width: '40px' }} class="bx" icon="mdi:user" /> <span>About</span></a></li>
                            <li><a href="#resume" class="nav-link scrollto"> <Icon style={{ width: '40px' }} class="bx" icon="mdi:file" /> <span>Resume</span></a></li>
                            <li><a href="#portfolio" class="nav-link scrollto"><Icon style={{ width: '40px' }} icon="bx:bxs-book-content" /><span>Portfolio</span></a></li>
                            <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
                            <li><a href="#contact" class="nav-link scrollto"><Icon style={{ width: '40px' }} icon="fluent:chat-mail-20-filled" /><span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;