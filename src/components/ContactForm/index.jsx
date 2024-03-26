/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormInput from './FormInput';
import sendMail from '../../pages/api/sendMail/router'
import parse from 'react-html-parser';

const baseUrl = "http://localhost:3000";

function ContactForm({ title, heading }) {
    // STATES
    const [subject, setSubject] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactPhoneNumber, setContactPhoneNumber] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    const sendMail = async () => {
        const response = await fetch('/api/sendMail/route',{
          method:'Post',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({
            subject, 
            contactName, 
            contactEmail, 
            contactMessage,
            contactPhoneNumber
          })
        })
        console.log(await response.json())
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
                            <form action="" className="row conact-form" onSubmit={sendMail}>
                                <div className="col-md-6 col-12">
                                    <div className="single-personal-info">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter Name"
                                            id="fullname"
                                            value={contactName}
                                            onChange={(e) => setContactName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="single-personal-info">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Enter Email Address"
                                            id="email"
                                            value={contactEmail}
                                            onChange={(e) => setContactEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="single-personal-info">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter Number"
                                            id="phone"
                                            value={contactPhoneNumber}
                                            onChange={(e) => setContactPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="single-personal-info">
                                        <label htmlFor="subject">Subject</label>
                                        <input
                                            type="text"
                                            placeholder="Enter Subject"
                                            id="subject"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 col-12">
                                    <div className="single-personal-info">
                                        <label htmlFor="subject">Enter Message</label>
                                        <textarea
                                            id="subject"
                                            placeholder="Enter message"
                                            value={contactMessage}
                                            onChange={(e) => setContactMessage(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12 col-12 text-center">
                                    <input
                                        className="submit-btn"
                                        type="submit"
                                        value="Get A Quote"
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
