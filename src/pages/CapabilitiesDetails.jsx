import React from 'react';

import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import ServiceDetails from '../components/ServiceDetails';
import Banner2 from "../components/Banner/Banner2"
import Banner from "../components/Banner"
import Bullets from "../components/Bullets"
import Process3 from "../components/Process3"
import AboutFeatured from '../components/AboutFeatured';
import Portfolio2 from '../components/Portfolio2';
function CapabilitiesDetails({ content }) {
    const { title, Image, titleBanner, subtitleBanner, featured1, banner1 } = content;
 
    const renderFeatrued1 = featured1.map((content)=>{
        return      <AboutFeatured aboutContent={content}/>

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
                        <Process3/>      
                                
 
                    </section>
                    <section>
                 
                    </section>
                    <div className="col-12">
                        <ServiceDetails content={content} />
                    </div>
                </div>
            </section>
            <Footer3 />
        </>
    );
}

export default CapabilitiesDetails;
