import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer3 from '../components/Footer3';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import ServiceDetails from '../components/ServiceDetails';
import ServiceSidebar from '../components/ServiceSidebar';

function ServicesDetails({content}) {
    const {title, faqs} = content
    return (
        <>
            <Header3 />
            <PageBanner
                bannerBg={bannerBg}
                heading={title}
                currentPage="Service Details"
            />
            <section className="service-details-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 mt-5 mt-md-0 col-12 order-2 order-md-1">
                            <ServiceSidebar />
                        </div>
                        <div className="col-lg-9 col-md-8 col-12 order-1 order-md-2">
                            <ServiceDetails faqs={faqs} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer3 />
        </>
    );
}

export default ServicesDetails;
