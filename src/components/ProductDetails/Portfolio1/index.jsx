import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import portfolioOneData from './porfolioOneData';
import PortfolioOneSlide from './PortfolioOneSlide';

SwiperCore.use([Navigation]);

function Product1(product) {
    const { type } = product;
    
    return (
        <section className="portfolio-section section-padding pt-5 mt-5">
            <div className="container">
                <div className="project-wrapper">
                    <Swiper className="portfolio-carousel-active owl-carousel">
                        {portfolioOneData.filter(element => element.productType === type)
                            .map((data) => (
                                <PortfolioOneSlide
                                    image={data.image}
                                    imgLink={data.imgLink}
                                    category={data.category}
                                    client={data.client}
                                    title={data.heading}
                                    desc={data.desc}
                                    btnText={data.btnText}
                                    key={data.id}
                                />
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Product1;
