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
    title: "Our Philosophy",
    subtitle: "The heart of our company lies in our names",
    texts: ["GTC LAND embodies our registered trademark and core values: ",
        "Our ultimate goal is to supply spiritual helmets by providing material helmets, aligning our purpose with the divine mission."
    ],
    bullets: ["G - Gospelized",
        "T- Truthized",
        "C-  Churchized",],
}

const about2 = {
    aboutImg: about_2,
    right: true,
    title: "Our Mission",
    subtitle: "Transforming your ideas into market-ready products",
    texts: ["At Land Helmets, our top priority is delivering superior quality products through rigorous quality control measures and efficient supply channels. In today’s fiercely competitive business landscape, we understand that exceptional products set successful businesses apart from competitors.",
        "To consistently produce top-tier products, we employ two key strategies:"
    ],
    bullets: [
        "*Stringent Quality Control:* Our in-house team expertly manages all aspects of the supply chain, ensuring excellence at every production stage.",
        "*Enhanced Cost Efficiency:* We collaborate with certified factories worldwide, optimizing cost savings and passing those benefits on to our customers."
    ]

}

const about3 = {
    aboutImg: about_3,
    right: false,
    title: "About Us",
    texts: [' With over 28 years of crafting premium safety helmets and sports, our leadership in manufacturing and product development has established us as one of the most recognized helmet brands in today’s global market. We have consistently delivered industry-leading product innovations that drive growth for both new and established businesses.',
            'Our approach goes beyond technical problem-solving and manufacturing services. We take a holistic approach to product development, ensuring you address the right challenges in the right market for the right customer with the right product. Let us elevate your business with our comprehensive expertise.'
]
}


const about4 = {
    aboutImg: about_4,
    right: true,
    title: "What Makes us Different",
    bullets: [
        "*Confidentiality and Business Secrets:* Land Helmets uphold strong principles and astrict bottom line to protect business secrets and maintain project confidentiality.",
        "*One-Stop Solution:* Total In-House control from product development to mass production.",
        "*Efficient Communication:* Connect directly with our dedicated team of technical experts who actively engage in your product development, serving as your creative problem solvers for efficient collaboration without intermediaries.",
        "*USA-Based:* Every client and project receives dedicated attention from a U.S.-based account manager who oversees the entire process from start to finish."
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
