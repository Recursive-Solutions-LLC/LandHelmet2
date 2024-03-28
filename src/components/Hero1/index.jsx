import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

function Hero1({cover}) {
    return (
        <section className="hero-slide-wrapper hero-1">
            <Swiper className="hero-slider-active owl-carousel">
                <SwiperSlide>
                    <div
                        className="single-slide bg-cover"
                        style={{
                            position: 'relative',
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${cover})`
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xl-6">
                                    <div className="hero-contents">
                                        <h1>Refinement & Development</h1>
                                        <h2 id="hero-subtitle">Chose our models or create your own</h2>
                                        <Link to="/services" className="theme-btn">Our Services <BsArrowRight style={{ marginLeft: '10px' }} /></Link>
                                        <Link to="/about" className="theme-btn black">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-slide bg-cover"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cover})`
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xl-6">
                                    <div className="hero-contents">
                                        <h1>Global Automotive</h1>
                                        <a href="services.html" className="theme-btn">
                                            Our Services <i className="fal fa-long-arrow-right" />
                                        </a>
                                        <a href="about.html" className="theme-btn black">
                                            learn more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Hero1;
