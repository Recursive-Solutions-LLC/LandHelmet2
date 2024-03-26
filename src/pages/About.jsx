import React from 'react';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import About2 from '../components/About2';
 import CoverAbout from '../assets/img/about-us/cover.jpg';
 import PageBanner from '../components/PageBanner';
 import AboutFeatured from '../components/AboutFeatured';
import Approch from '../components/Approch';
import Timeline from '../components/Timeline';
import Cta3 from '../components/Cta2';

function About() {
    return (
        <>
            <Header3 />
     
            <PageBanner bannerBg={CoverAbout} currentPage="About Us" heading="About Us" />
            <AboutFeatured />
            <Approch />
            <Timeline/>
            <About2/>
            <Cta3/>
            <Footer3 />
        </>
    );
}

export default About;
