import React from 'react';

import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import ServiceDetails2 from '../components/ServiceDetails/ServiceDetails2';
import ServiceDetails from '../components/ServiceDetails/index';
import featured4 from "../assets/img/capabilities/OneStop/featured4.png"
import AboutFeatured from '../components/AboutFeatured';


function CapabilitiesDetails2({ content, contentII, contentIII }) {
    const { title, Image, cover, featured1 } = content;

    const renderFeatrued1 = featured1.map((content, index) => {
        const direction = index % 2 ===0 ? true : false
        const newContent = {...content, right:direction}
        return <AboutFeatured aboutContent={newContent} />

    })

    const ctaTitle = "Safety, Fashion and comfort combined for your ultimate head protection."


    const aboutContent = {
        title:  "Rigorous Quality Control Measures",
        subtitle: "Discover our cutting-edge mass production capabilities tailored specifically for our exceptional helmets.",
        texts: ["At our in-house testing lab, we subject both products and incoming materials to rigorous assessments, encompassing tests for impact resistance, accelerated weathering to gauge product lifespan, and a host of other evaluations. Additionally, batch samples undergo meticulous testing at various stages of the production cycle. Through this multi-point quality control system, we safeguard the quality and integrity of our products, ensuring they meet the highest standards."],
        right: false,
        aboutImg: Image,
    }

    const aboutContent2 = {
        title: "Mass Production ",
        subtitle: "Discover our cutting-edge mass production capabilities tailored specifically for our exceptional helmets.",
        texts: [" With state-of-the-art technology and streamlined processes, we ensure efficient and precise manufacturing at scale. Our advanced production facilities are equipped to meet high demand without compromising on quality, delivering helmets that exceed expectations in both performance and reliability. From concept to creation, we guarantee superior helmets that stand out for their durability, safety, and innovative design."],
        right: false,
        aboutImg: featured4,
    }


    return (
        <>
            <Header3 />
            <PageBanner
                bannerBg={cover}
                heading={title}
                currentPage="Our Capabilities"
            />
            {renderFeatrued1}
            <section className="section-padding container">
                <div className=" mx-5">
                    <ServiceDetails2 content={content} />
                </div>
            </section>

            <section className="container">
            <AboutFeatured aboutContent={aboutContent} />
                <ServiceDetails2 content={contentII} />
            </section>
            <div className="container">
                <AboutFeatured aboutContent={aboutContent2} />
            </div>
            <section className="section-padding">
                <ServiceDetails content={contentIII} />
            </section>

            <Footer3 />


        </>
    );
}

export default CapabilitiesDetails2;
