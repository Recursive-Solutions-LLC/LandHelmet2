/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState ,useRef} from 'react';

import emailjs from 'emailjs-com';


function ContactForm({ title, heading }) {
    // STATES

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm(  process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID)
          .then((result) => {
              console.log(result.text);
              alert("Email sent successfully!");
          }, (error) => {
              console.log(error.text);
              alert("Error sending email:", error.message);
          });
    }

 

    return (
        <section className="contact-form-wrapper section-padding pt-0">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mb-20">
                    <span>{title}</span>
                    <h1>{heading}</h1>
                </div>

                <div className="col-12 col-lg-12">
                    <div className="contact-form">
                        <form ref={form} className="row contact-form" onSubmit={sendEmail}>
                            <div className="col-md-6 col-12">
                                <div className="single-personal-info">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="user_name"  // This should match the variable expected in your EmailJS template
                                        placeholder="Enter Name"
                                        id="fullname"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="single-personal-info">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="user_email"  // This should match the variable expected in your EmailJS template
                                        placeholder="Enter Email Address"
                                        id="email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="single-personal-info">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="user_phone"  // Adjusted name to match a typical EmailJS variable name
                                        placeholder="Enter Number"
                                        id="phone"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="single-personal-info">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        name="user_subject"  // Adjusted name to match a typical EmailJS variable name
                                        placeholder="Enter Subject"
                                        id="subject"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <div className="single-personal-info">
                                    <label htmlFor="message">Enter Message</label>
                                    <textarea
                                        name="message"  // This should match the variable expected in your EmailJS template
                                        placeholder="Enter message"
                                        id="message"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-12 col-12 text-center">
                                <input
                                    className="submit-btn"
                                    type="submit"
                                    value="Contact Us"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default ContactForm;
