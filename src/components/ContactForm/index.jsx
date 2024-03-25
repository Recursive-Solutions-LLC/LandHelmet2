/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormInput from './FormInput';
import { sendEmail } from './sendEmail';

function ContactForm({ title, heading }) {
    // STATES
    const [subject, setSubject] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactPhoneNumber, setContactPhoneNumber] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    // HANDLER
    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleContactNameChange = (e) => {
        setContactName(e.target.value);
    };

    const handleContactPhoneNumberChange = (e) => {
        setContactPhoneNumber(e.target.value);
    };

    const handleContactEmailChange = (e) => {
        setContactEmail(e.target.value);
    };

    const handleContactMessageChange = (e) => {
        setContactMessage(e.target.value);
    };


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const emailBody = `
            Subject: ${subject}
            Contact Name: ${contactName}
            Contact Phone Number: ${contactPhoneNumber}
            Contact Email: ${contactEmail}
            Message: ${contactMessage}
        `;
        sendEmail(subject, emailBody);
    };

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
                            <form action="" className="row conact-form">
                                <FormInput
                                    type="text"
                                    labelFor="fullname"
                                    label="Full Name"
                                    placeholder="Enter Name"
                                    id="fullname"
                                    value={contactName}
                                    onChange={handleContactNameChange}
                                />
                                <FormInput
                                    type="email"
                                    labelFor="email"
                                    label="Email Address"
                                    placeholder="Enter Email Address"
                                    id="email"
                                    value={contactEmail}
                                    onChange={handleContactEmailChange}
                                />
                                <FormInput
                                    type="text"
                                    labelFor="phone"
                                    label="Phone Number"
                                    placeholder="Enter Number"
                                    id="phone"
                                    value={contactPhoneNumber}
                                    onChange={handleContactPhoneNumberChange}
                                />

                                <FormInput
                                    type="text"
                                    labelFor="subject"
                                    label="Subject"
                                    placeholder="Enter Subject"
                                    id="subject"
                                    value={subject}
                                    onChange={handleSubjectChange}
                                />

                                <div className="col-md-12 col-12">
                                    <div className="single-personal-info">
                                        <label htmlFor="subject">Enter Message</label>
                                        <textarea
                                            id="subject"
                                            placeholder="Enter message"
                                            value={contactMessage}
                                            onChange={handleContactMessageChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12 col-12 text-center">
                                    <input
                                        className="submit-btn"
                                        type="submit"
                                        value="Get A Quote"
                                        onSubmit={onSubmitHandler}
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
