/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import contactData from './contactData';
import ContactItem from './ContactItem';
import Map from './Map';

function ContactUs() {
    return (
        <section className="contact-page-wrap section-padding">
            <div className="container">
                <div className="row">
                    {contactData.map((data) => (
                        <ContactItem
                            key={data.id}
                            heading={data.heading}
                            text={data.text}
                            icon={data.icon}
                            item1={data.item1}
                            item2={data.item2}
                            action={data.action}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ContactUs;
