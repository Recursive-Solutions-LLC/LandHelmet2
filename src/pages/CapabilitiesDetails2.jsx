import React from 'react';

import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import ServiceDetails from '../components/ServiceDetails';
import Banner2 from "../components/Banner/Banner2"

function CapabilitiesDetails2({ content }) {
    const { title, Image } = content;

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
    
                        <ServiceDetails content={content} />
                </div>
            </section>
            <Footer3 />
        </>
    );
}

export default CapabilitiesDetails2;
