import React from 'react';

import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import ServiceDetails from '../components/ServiceDetails';
import Banner2 from "../components/Banner/Banner2"

import Process3 from "../components/Process3"
import AboutFeatured from '../components/AboutFeatured';
import Portfolio2 from '../components/Portfolio2';
import portfolioTwo from '../content/porfolioThreeData';
import inHouseRd from "../content/capablities/inHouseRd2"
import Footer3 from '../components/Footer1';
import Timeline from '../components/Timeline';
import Text from '../components/Text';
function CapabilitiesDetails({ content }) {
    const { title, Image, titleBanner, subtitleBanner, featured1 } = content;

    const renderFeatrued1 = featured1.map((content) => {
        return <AboutFeatured aboutContent={content} />

    })
    const renderFeatrued2 = inHouseRd.featured1.map((content) => {
        return <AboutFeatured aboutContent={content} />
    })


    return (
        <>
            <Header3 />
            <PageBanner
                bannerBg={Image}
                heading={title}
                currentPage="Service Details"
            />
            <section className="">
                <div className="container">
                    <Banner2 title={titleBanner} subtitle={subtitleBanner} />
                    {renderFeatrued1}


                    <section >
                        <Process3 />


                    </section>

                    <section className='pt-port'>
                        <Portfolio2 content={portfolioTwo} />
                        {renderFeatrued2}
                    </section>

                </div>
                <div className='pt-5'>
                    <Timeline />
                    <Text />
                </div>


                <div className="col-12 pt-5">
                    <ServiceDetails content={content} />
                </div>
                <div className="cta-funfact-wrap pt-5 mb-5">
                    <div className=" mx-auto">
                        <div className="row">

                            <div className="col-12">
                                <div className="cta-wrap d-flex justify-content-center justify-content-md-around align-items-center">
                                    <h3 className="text-white text-center h3y">Safe, Fashion and confort combined for your ultimate head protection</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer3 />
        </>
    );
}

export default CapabilitiesDetails;
