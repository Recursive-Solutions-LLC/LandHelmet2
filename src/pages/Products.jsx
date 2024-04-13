import React from 'react';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import Faq from '../components/Faq3';
import Helmets from '../components/Helmets';
import TeamMembers2 from '../components/TeamMembers3'
import data from "../content/brand"
import PortfolioOneSlide from '../components/Portfolio1/PortfolioOneSlide';
import VideoFeatrued from '../components/VideoFeatured';
import {productTypeIIData} from "../content/ModelsTypeII"
function Products({ model, type }) {
    console.log(productTypeIIData)
    const { cover, variants } = model
    let dataRender = {};
    switch (type) {
        case 'M10':
            dataRender = data.m10;
            break;
        case 'M12':
            dataRender = data.m12;
            break;
        default:
            dataRender = data.m02;
    }
    return (
        <>
            <Header3 />

            {/* <PageBanner bannerBg={image} /> */}
            <Faq />
            <VideoFeatrued/>
            <section className="portfolio-section  pt-0">
                <div className="container">
                    <div className="project-wrapper">
                        <div className="portfolio-carousel-active owl-carousel">

                            <PortfolioOneSlide image={dataRender.image}
                                imgLink={dataRender.imgLink}
                                link={dataRender.link}
                                category={dataRender.category}
                                client={dataRender.client}
                                title={dataRender.heading}
                                desc={dataRender.desc}
                                btnText={dataRender.btnText} /></div></div></div></section>
            <Helmets cover={cover} variants={variants} type={type} />
            <TeamMembers2 type={type} />
       
            <Footer3 />
        </>
    );
}

export default Products;
