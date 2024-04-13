import React from 'react';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import Faq from '../components/Faq3';
import Helmets from '../components/Helmets';
import FullBanner from '../components/Banner/FullBanner';
import TeamMembers2 from '../components/TeamMembers3'
import PortfolioOneSlide from '../components/Portfolio1/PortfolioOneSlide';
import VideoFeatrued from '../components/VideoFeatured';
import ProductDisplay from '../components/ProductDisplay';

function Products({ model, type, brand, helmetDisplay }) {

    const { cover, variants, banner } = model
    const { image, imgLink, link, client, heading, desc, btnText, category } = brand


    const { title, details, mainImage, sides, detailsTitle } = helmetDisplay

    console.log('%csrc/pages/Products.jsx:20 helmetDisplay', 'color: white; background-color: #007acc;', helmetDisplay);

    return (
        <>
            <Header3 />

            <FullBanner banner={banner} />

            <ProductDisplay title={title} details={details} mainImage={mainImage} sides={sides} detailsTitle={detailsTitle}  />
            <Faq />
            <VideoFeatrued />
            <section className="portfolio-section  pt-0">
                <div className="container">
                    <div className="project-wrapper">
                        <div className="portfolio-carousel-active owl-carousel">

                            <PortfolioOneSlide image={image}
                                imgLink={imgLink}
                                link={link}
                                category={category}
                                client={client}
                                title={heading}
                                desc={desc}
                                btnText={btnText} />
                        </div>
                    </div>
                </div>
            </section>
            <Helmets cover={cover} variants={variants} type={type} />
            <TeamMembers2 type={type} />

            <Footer3 />
        </>
    );
}

export default Products;
