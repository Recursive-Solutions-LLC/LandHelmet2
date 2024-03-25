import React from 'react';
import bannerBg from '../assets/img/contact-us/professional-architect-woman-standing-outdoors-2023-11-27-05-04-38-utc.jpg';
import ContactForm from '../components/ContactForm';
import ContactUs from '../components/ContactUs';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';

function Contact() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading="Contact Us" currentPage="Contact" />
            <ContactUs />
            <ContactForm title="Write Message" heading="Get In Touch" />
            <Footer3 />
        </>
    );
}

export default Contact;
