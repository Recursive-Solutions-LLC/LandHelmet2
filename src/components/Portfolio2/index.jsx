import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import PortfolioTwoItem from './PortfolioTwoItem';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Portfolio2({content}) {
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
    
    return (
        <section className="portfolio-wrapper cases-carousel-wrapper pt-5  ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                        <div className="section-title-3">
                    
                            <h1>Unlock The Full Potential Of Your Product</h1>
                            <h2>and Bring Your Vision To Life with US</h2>
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
                {content.map((data,index) => (
                    <SwiperSlide key={index}>
                        <PortfolioTwoItem
                            key={data.id}
                            img={data.image}
                            text={data.text}
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
