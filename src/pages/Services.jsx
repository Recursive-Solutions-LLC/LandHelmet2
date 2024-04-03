import React from 'react';
import bannerBg from '../assets/img/services/cover.jpg';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import Process from '../components/Process';
import ProjectFilter2 from "../components/ProjectFilter2"
import capabilitiesContent from "../content/capablities/capabilities"
import Cta1 from "../components/Cta"
import Banner from "../components/Banner"
function Services() {

    const {title, subtitle, image, featured} = capabilitiesContent.section1;

    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} currentPage="Capabilities" heading="What We Do" />

            <section className="section-padding-top">
                <div className="container">
                    <Banner title={title} subtitle={subtitle} image={image} />
                </div>
            </section>
            <ProjectFilter2 items={featured} />
            <Cta1 />
            <Process />
            <Footer3 />
        </>
    );
}

export default Services;
