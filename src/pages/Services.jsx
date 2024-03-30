import React from 'react';
import bannerBg from '../assets/img/services/cover.jpg';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import Process from '../components/Process';
import Services2 from '../components/Services2';

function Services() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} currentPage="Services" heading="What We Do" />
            <Services2 />
            <Process />
            <Footer3 />
        </>
    );
}

export default Services;
