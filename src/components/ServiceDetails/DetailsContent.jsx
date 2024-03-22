import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import img1 from '../../assets/img/gallery/5.jpg';
import img2 from '../../assets/img/gallery/6.jpg';
import { FiCheck } from 'react-icons/fi';
import ReactHtmlParser from 'react-html-parser'
import ServicesContent from './ServicesContent';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PortfolioOneSlide from '../Portfolio1/PortfolioOneSlide';
import 'swiper/swiper-bundle.min.css';
import FaqAccordion from '../FaqAccordion';
import faqImg from '../../assets/img/home3/faq_man.png';
import faqBg from '../../assets/img/map_faq.png';

SwiperCore.use([Navigation]);

function DetailsContent({ sections }) {

    return (
        <>   
            < section className="portfolio-section pb-24">
                <div className="container">
                    <div className="project-wrapper">
                        <Swiper navigation className="portfolio-carousel-active owl-carousel">
                            {sections.map((element, index) => (
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
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section >

            <blockquote>
                Safety, Fashion and comfort combined for your ultimate head protection.
            </blockquote>
        </>
    );
}

export default DetailsContent;
