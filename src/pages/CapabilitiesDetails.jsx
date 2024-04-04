import React from 'react';

import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import ServiceDetails from '../components/ServiceDetails';
import Banner2 from "../components/Banner/Banner2"
import Banner from "../components/Banner"
import Bullets from "../components/Bullets"
import AboutFeatured from '../components/AboutFeatured';

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
                        <Banner title={banner1.title} subtitle={banner1.subtitle} image={banner1.image} />
                       <div className="mt-5">
                            <Bullets bullets={banner1.bullets}/>
                       </div>
 
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
