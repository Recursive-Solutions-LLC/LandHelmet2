import React from 'react';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import About2 from '../components/About2';
import CoverAbout from '../assets/img/about/cover.jpg';
import PageBanner from '../components/PageBanner';
import AboutFeatured from '../components/AboutFeatured';

import Cta3 from '../components/Cta2';

import about_1 from "../assets/img/about/about-1.jpg";
import about_2 from "../assets/img/about/about-2.png";

import about_3 from "../assets/img/about/about-3.png";
import about_4 from "../assets/img/about/about-4.png";

const about1 = {
    aboutImg: about_1,
    right: false,
    title: "Located in Orange County, California.",
    subtitle: "Welcome to Land Helmets",
    texts: ["With a combined 28+ years of experience, our company has the working knowledge and network of resources to meet the ever changing demand of today's maket.",
        "Our headquarter is based in Cypress, CA USA where main operations, sales, and design teams are located and our factory and production team in China.",
        "Our Asia staff allows us to manage customer defined QC measures by being present on-site during production and at the end of final inspection before shipment."]
}

const about2 = {
    aboutImg: about_2,
    right: true,
    title: "At Land Helmets",
    subtitle: "Our mission statement:",
    texts: ["Manufacturing top quality products, through strict QC (quality control) measures and cost-efficient supply channels, is the highest priority at Helmet Solutions",
        "In today's highly competitive business world, Helmet Solutions realize quality products separate successful businesses from its competition. Therefore, we strive to consistently manufacture top quality products by two means:"
    ],
    bullets: [
        "Implementing strict QC measures by using in-house staff to manage the supply chaines at all ends of the floor",
        "Using certified factories in China to ensure cost savings is to our customers' advantage."
    ]

}

const about3 = {
    aboutImg: about_3,
    right: false,
    title: "The heart of our company lies in our name",
    subtitle: "Our Philosophy",
    texts: [' GTC LAND. Here, "LAND" stands as our registered trademark, while each letter represents our core values: "G" for Gospelized, "T" for Truthized, and "C" for Churchized. Our ultimate goal is to supply spiritual helmets by providing material helmets, aligning our purpose with the divine mission.']
}


const about4 = {
    aboutImg: about_4,
    right: true,
    title: "Industry best services at highly factory direct competitive pricing",
    subtitle: "",
    texts: [
        "Total in-house control from design to production to delivery.",
        "Highly knowledgeable and experienced personnel with confidentiality controls in place.",
        "Dedicated focus from an account manager based in the United States who is assigned to every client and project from start to finish."
    ]

}


function About() {
    return (
        <>
            <Header3 />

            <PageBanner bannerBg={CoverAbout} currentPage="About Us" heading="About Us" />
            <section className='section-padding'>
                <AboutFeatured aboutContent={about1} />
                <AboutFeatured aboutContent={about2} />
                <AboutFeatured aboutContent={about3} />

                <AboutFeatured aboutContent={about4} />

            </section>
            <About2 />
            <Cta3 />
            <Footer3 />
        </>
    );
}

export default About;
