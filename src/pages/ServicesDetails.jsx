import React from 'react';

import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import ServiceDetails from '../components/ServiceDetails';
import DetailsCarousel from '../components/ServiceDetails/DetailsCarousel';
import Banner2 from "../components/Banner/Banner2"

function ServicesDetails({ content }) {
    const { title, Image, carouselImg, titleBanner, subtitleBanner } = content;
    console.log('%csrc/pages/ServicesDetails.jsx:12 content', 'color: white; background-color: #007acc;', content);
    const isRD = title === 'R&D'  ;
    return (
        <>
            <Header3 />
            <PageBanner
                bannerBg={Image}
                heading={title}
                currentPage="Service Details"
            />
            <section className="section-padding">
                <div className="container">
                <div className="container">
                     <Banner2 title={titleBanner} subtitle={subtitleBanner} />
                </div>
                    <div className="col-12">
                        <ServiceDetails content={content} />
                    </div>
                </div>
            </section>
            <Footer3 />
        </>
    );
}

export default ServicesDetails;
