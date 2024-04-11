import React from 'react';

import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import ServiceDetails2 from '../components/ServiceDetails/ServiceDetails2';
import ServiceDetails from '../components/ServiceDetails/index';
import featured4 from "../assets/img/capabilities/OneStop/featured4.png"
import AboutFeatured from '../components/AboutFeatured';
import Cta from "../components/Cta3"
import Banner from "../components/Banner/index"

function CapabilitiesDetails2({ content, contentII, contentIII }) {
    const { title, Image, featured1 } = content;

    const renderFeatrued1 = featured1.map((content) => {
        return <AboutFeatured aboutContent={content} />

    })

    const ctaTitle = "Safety, Fashion and comfort combined for your ultimate head protection."
    const aboutContent = {
        title: "Mass Production ",
        subtitle: "Discover our cutting-edge mass production capabilities tailored specifically for our exceptional helmets.",
        texts: [" With state-of-the-art technology and streamlined processes, we ensure efficient and precise manufacturing at scale. Our advanced production facilities are equipped to meet high demand without compromising on quality, delivering helmets that exceed expectations in both performance and reliability. From concept to creation, we guarantee superior helmets that stand out for their durability, safety, and innovative design."],
        right: true,
        aboutImg: featured4,
    }


    const bannerTitle = "Rigorous Quality Control Measures";
    const bannerSubtitle = "At our in-house testing lab, we subject both products and incoming materials to rigorous assessments, encompassing tests for impact resistance, accelerated weathering to gauge product lifespan, and a host of other evaluations. Additionally, batch samples undergo meticulous testing at various stages of the production cycle. Through this multi-point quality control system, we safeguard the quality and integrity of our products, ensuring they meet the highest standards.";

    const bannerImage = {
        src: Image,
        alt: " image of quality control process with digital tools"
    }

    return (
        <>
            <Header3 />
            <PageBanner
                bannerBg={Image}
                heading={title}
                currentPage="Our Capabilities"
            />

            <div className="container">
                <AboutFeatured aboutContent={aboutContent} />
            </div>
            {renderFeatrued1}
            <section className="section-padding container">
                <div className=" mx-5">
                    <ServiceDetails2 content={content} />
                </div>
            </section>

            <section className="section-padding container">
                <Banner title={bannerTitle} image={bannerImage} subtitle={bannerSubtitle} />
                <ServiceDetails2 content={contentII} />
            </section>

            <Cta title={ctaTitle} />
            <div className="container">
                <AboutFeatured aboutContent={aboutContent} />
            </div>
            <section className="section-padding">
                <ServiceDetails content={contentIII} />
            </section>

            <Footer3 />


        </>
    );
}

export default CapabilitiesDetails2;
