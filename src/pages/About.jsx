import React from 'react';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import About2 from '../components/About2';

 import bannerBg from '../assets/img/page-banner.jpg';
// import AboutFeatured from '../components/AboutFeatured';
// import Approch from '../components/Approch';
 import PageBanner from '../components/PageBanner';
// import SkillSet from '../components/SkillSet';
// import Sponsors from '../components/Sponsors';
// import Timeline from '../components/Timeline';

function About() {
    return (
        <>
            <Header3 />
     
            <PageBanner bannerBg={bannerBg} currentPage="About Us" heading="About Us" />
            <About2/>
            {/* 
            <AboutFeatured />
            <Approch />
            <SkillSet />
            <Sponsors />
            <Timeline /> */}
            <Footer3 />
        </>
    );
}

export default About;
