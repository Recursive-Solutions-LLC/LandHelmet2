import React from 'react';

import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import ServiceDetails from '../components/ServiceDetails';
import ServiceSidebar from '../components/ServiceSidebar';
import DetailsCarousel from '../components/ServiceDetails/DetailsCarousel';

function ServicesDetails({ content }) {
    const { title, Image, carouselImg } = content;

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
                   {!isRD && <DetailsCarousel carouselImg={carouselImg} />}
                    
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
