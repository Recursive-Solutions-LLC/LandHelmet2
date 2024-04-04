import React from 'react';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import About2 from '../components/About2';
 import CoverAbout from '../assets/img/about/cover.jpg';
 import PageBanner from '../components/PageBanner';
 import AboutFeatured from '../components/AboutFeatured';
import Approch from '../components/Approch';
import Timeline from '../components/Timeline';
import Cta3 from '../components/Cta2';

import about_1 from "../assets/img/about/about-1.jpg";
import about_2 from "../assets/img/about/about-2.png";

import about_3 from "../assets/img/about/about-3.png";

const about1 ={
    aboutImg: about_1 ,
    right: false,
    title: "Located in Orange County, California.",
    subtitle: "Welcome to GTC LAND SPORTS INC",
    texts:[ "Based in the vibrant community of Cypress, CA, GTC LAND SPORTS INC is a dynamic startup company driven by professionalism, agility, and unwavering customer focus. Our mission is simple yet ambitious: to turn opportunities into tangible realities through a blend of research, evaluation, innovation, and design."]
}

const about2 ={
    aboutImg: about_2,
    right: true,
    title: "At GTC LAND SPORTS INC",
    subtitle: "Our Vision",
    texts:[ "we believe in the power of transformation. By harnessing the principles of impactful branding, user-centric product design, and practical engineering, we strive to create products that not only meet but exceed market expectations."]
}

const about3 ={
    aboutImg: about_3,
    right: false,
    title: "The heart of our company lies in our name",
    subtitle: "Our Philosophy",
    texts:[ ' GTC LAND. Here, "LAND" stands as our registered trademark, while each letter represents our core values: "G" for Gospelized, "T" for Truthized, and "C" for Churchized. Our ultimate goal is to supply spiritual helmets by providing material helmets, aligning our purpose with the divine mission.']
}


function About() {
    return (
        <>
            <Header3 />
     
            <PageBanner bannerBg={CoverAbout} currentPage="About Us" heading="About Us" />
            <section className='section-padding'>
                <AboutFeatured aboutContent={about1}/>
                <AboutFeatured aboutContent={about2}/>
                <AboutFeatured aboutContent={about3}/>
            </section>
            <Approch type={1}/>
            <Timeline/>
            <About2/>
            <Cta3/>
            <Footer3 />
        </>
    );
}

export default About;
