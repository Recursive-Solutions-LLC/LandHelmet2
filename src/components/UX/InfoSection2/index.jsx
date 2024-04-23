import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import InfoCard from '../InfoCard3';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Portfolio2({content}) {
    const {InfoCards, title, subtitle} = content;
    
    const leftAnimation = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          leftAnimation.current,
          { x: -100, autoAlpha: 0 },
          {
            x: 0, 
            autoAlpha: 1, 
            duration: 2,
            scrollTrigger: {
                start: "top bottom", 
              trigger: leftAnimation.current, 
              toggleActions: "play none none none", 
            },
          }
        );
    
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);

      const renderInfoCards = InfoCards.map((data,index) => (
        <SwiperSlide key={index}>
            <InfoCard
              content={data}
            />
        </SwiperSlide>
    ))
    
    return (
        <section className="section-padding-bottom portfolio-wrapper cases-carousel-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                        <div className="section-title-3">
                    
                            <h1>{title}</h1>
                            <h2>{subtitle}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper ref={leftAnimation} 
                spaceBetween={20}
                autoplay
                pagination={{ clickable: true }}
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
                {renderInfoCards}
            </Swiper>
        </section>
    );
}

export default Portfolio2;
