import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import { Icon } from '@iconify/react';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z28k525', 'template_ushs0nh', form.current, 'user_ZQz9NwvebNzuTz9BBUq7O')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <>
            <section id="contact" class="contact">
                <div class="container">

                    <div class="section-title">
                        <h2>Contact</h2>
                        <p></p>
                    </div>

                    <div class="row" data-aos="fade-in">

                        <div class="col-lg-5 d-flex align-items-stretch">
                            <div class="info">
                                <div class="address">
                                    <i class="bi bi-geo-alt">
                                        <Icon icon="akar-icons:location" />
                                    </i>

                                    <h4>Location:</h4>
                                    <p>Adabor,mohammadpur,dhaka,Bnagladesh</p>
                                </div>

                                <div class="email">
                                    <i class="bi bi-envelope">
                                        <Icon icon="dashicons:email-alt" />
                                    </i>
                                    <h4>Email:</h4>
                                    <p>mdimranhossain122@gmail.com</p>
                                </div>

                                <div class="phone">
                                    <i class="bi bi-phone">
                                        <Icon icon="akar-icons:phone" />
                                    </i>
                                    <h4>Call:</h4>
                                    <p>+880 1682765544</p>
                                </div>


                            </div>

                        </div>

                        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form ref={form} onSubmit={sendEmail} class="php-email-form">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" name="user_name" class="form-control" id="name" required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="name">Your Email</label>
                                        <input type="email" class="form-control" name="user_email" id="email" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name">Subject</label>
                                    <input type="text" class="form-control" name="subject" id="subject" required />
                                </div>
                                <div class="form-group">
                                    <label for="name">Message</label>
                                    <textarea class="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div class="my-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Contact;