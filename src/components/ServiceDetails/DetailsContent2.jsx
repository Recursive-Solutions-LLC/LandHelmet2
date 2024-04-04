import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PortfolioOneSlide from '../Portfolio1/PortfolioOneSlide';
import 'swiper/swiper-bundle.min.css';


SwiperCore.use([Navigation]);

function DetailsContent({ sections }) {


    const renderSections= sections.map((element, index) => (
        <div key={index}>
                <SwiperSlide >
                    <PortfolioOneSlide
                        style={{ heigth: "100%" }}
                        image={element.img}
                        imgLink={''}
                        link={'/contact'}
                        category={''}
                        client={''}
                        title={element.title}
                        desc={element.text}
                        btnText={'Contact'}
                    />
                </SwiperSlide>
        </div>
    ))

    return (
        <>   
            < section className="portfolio-section pb-24">
                <div className="container">
                    <div className="project-wrapper">
                        <Swiper navigation className="portfolio-carousel-active owl-carousel">
                            {renderSections}
                        </Swiper>
                    </div>
                </div>
            </section >

        </>
    );
}

export default DetailsContent;
