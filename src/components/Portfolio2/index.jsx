import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import portfolioTwoData from './porfolioTwoData';
import PortfolioTwoItem from './PortfolioTwoItem';

function Portfolio2() {
    return (
        <section className="portfolio-wrapper cases-carousel-wrapper section-padding section-bg ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                        <div className="section-title-3">
                            <p>Helmet Offerings</p>
                            <h1>Advanced Helmet Solutions</h1>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                spaceBetween={40}
                autoplay
                className="portfolio-carousel-wrapper owl-carousel mx-20"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },

                    992: {
                        slidesPerView: 2,
                    },
                }}
            >
                {portfolioTwoData.map((data,index) => (
                    <SwiperSlide key={index}>
                        <PortfolioTwoItem
                            key={data.id}
                            img={data.image}
                            name={data.name}
                            cost={data.cost}
                            heading={data.heading}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Portfolio2;
