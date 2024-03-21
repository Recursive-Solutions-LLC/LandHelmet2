import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import PortfolioOneSlide from '../Portfolio1/PortfolioOneSlide';

// function ServicesThreeCard({ thumb, heading, text }) {
//     return (
//         <div className="single-service-box bg-cover" style={{ backgroundImage: `url(${thumb})` }}>
//             <div className="service-title">
//                 <h2>{heading}</h2>
//             </div>
//             <div className="hover-flip-content text-left">
//                 <h2>{heading}</h2>
//                 <p>{text}</p>
//             </div>
//         </div>
//     );
// }

function ServicesThreeCard({ thumb, heading, text }) {
    return (
        <section className="portfolio-section section-padding pt-0">
            <div className="container">
                <div className="project-wrapper">
                    <Swiper className="portfolio-carousel-active owl-carousel">
                        <div className="single-project">
                            <div className="project-contents">
                                <div className="row">
                                    <div className="project-thumbnail col-lg-5 offset-lg-1 p-lg-0 order-1 order-lg-2 col-12">
                                        <a href="#" className="popup-gallery bg-cover" style={{ backgroundImage: `url(${thumb})` }}>{null}</a>
                                    </div>
                                    <div className="project-details col-lg-4 offset-lg-1 pl-lg-0 order-2 order-lg-1 col-12">
                                        <h2>{heading}</h2>
                                        <p>{text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default ServicesThreeCard;
