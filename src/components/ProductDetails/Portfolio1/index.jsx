import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import PortfolioOneSlide from './PortfolioOneSlide';

SwiperCore.use([Navigation]);

function Product1({section, left}) {
    const {image, imgLink, category, client, heading, desc, btnText, id} = section
    return (
        <section className="portfolio-section section-padding pt-5 mt-5">
            <div className="container">
                <div className="project-wrapper">
                    <Swiper className="portfolio-carousel-active owl-carousel">
                        {
                                <PortfolioOneSlide
                                left={left}
                                    image={image}
                                    imgLink={imgLink}
                                    category={category}
                                    client={client}
                                    title={heading}
                                    desc={desc}
                                    btnText={btnText}
                                    key={id}
                                />
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Product1;
