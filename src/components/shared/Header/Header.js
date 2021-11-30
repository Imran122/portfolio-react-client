import React from 'react';
import img from '../../../images/profile-img.jpg'
import { Icon } from '@iconify/react';
import './Header.css'
import { Button } from 'react-bootstrap';
import Pdf from '../../../resume/IMRAN HOSSAIN.pdf';
const Header = () => {





    return (
        <>
            <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
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
                            <li><a href="#hero" class="nav-link scrollto active"><Icon style={{ width: '40px' }} class="bx" icon="mdi:home" /><span>Home</span></a></li>
                            <li><a href="#about" class="nav-link scrollto"><Icon style={{ width: '40px' }} class="bx" icon="mdi:user" /> <span>About</span></a></li>
                            <li><a href="#resume" class="nav-link scrollto"> <Icon style={{ width: '40px' }} class="bx" icon="mdi:file" /><span>Resume</span></a></li>
                            <li><a href="#portfolio" class="nav-link scrollto"><Icon style={{ width: '40px' }} icon="bx:bxs-book-content" /><span>Portfolio</span></a></li>

                            <li><a href="#contact" class="nav-link scrollto"><Icon style={{ width: '40px' }} icon="fluent:chat-mail-20-filled" /><span>Contact</span></a></li>
                            <li className="w-10 h-5">
                                <a href={Pdf} without rel="noopener noreferrer" target="_blank" >
                                    <Button variant="outline-light" trailingIcon="picture_as_pdf" label="Resume">
                                        Open Resume
                                    </Button>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;