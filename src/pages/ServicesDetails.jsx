import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import ServiceDetails from '../components/ServiceDetails';
import ServiceSidebar from '../components/ServiceSidebar';
import DetailsCarousel from '../components/ServiceDetails/DetailsCarousel';
import Timeline from '../components/Timeline';

function ServicesDetails({ content }) {
    const { title, Image, carouselImg } = content;
    return (
        <>
            <Header3 />
            <PageBanner
                bannerBg={Image}
                heading={title}
                currentPage="Service Details"
            />
            <section className="service-details-wrapper section-padding">
                {title == 'R&D' && (<Timeline />)}
                <div className="container">
                    {title != 'R&D' && (<DetailsCarousel carouselImg={carouselImg} />)}
                    <div className="row">
                        <div className="col-lg-3 col-md-4 mt-5 mt-md-0 col-12 order-2 order-md-1">
                            <ServiceSidebar />
                        </div>
                        <div className="col-lg-9 col-md-8 col-12 order-1 order-md-2">
                            <ServiceDetails content={content} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer3 />
        </>
    );
}

export default ServicesDetails;
