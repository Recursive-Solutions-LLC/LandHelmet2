import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import timeLineData from './timeLineData';
import TimelineItem from './TimelineItem';
import SwiperCore, { Autoplay } from 'swiper';
import {  Pagination, Navigation } from "swiper";

export default function App() {
    SwiperCore.use([Autoplay])
    return (
        <section className="timeline-wrapper  timeline-wrapper-2 section-padding">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-12 col-lg-12">
                        <div className="section-title-3 text-center">
                       
                            <p>R&D Process</p>
                            <h1>From Concept to Market</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-flud">
                <Swiper
                    slidesPerView="4"
                    spaceBetween={30}
                    centeredSlides
                    loop={true}
                 
                
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                      }}
                     
        modules={[Autoplay, Pagination, Navigation]}
     
                
                    className="mySwiper timeline-carousel-wrapper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },

                        768: {
                            slidesPerView: 3,
                        },

                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {timeLineData.map((data) => (
                        <SwiperSlide key={data.id}>
                            <TimelineItem
                                year={data.year}
                                icon={data.icon}
                                heading={data.heading}
                                text={data.text}
                                transform={data.transform}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <svg className="svg-line">
                    <path
                        fillRule="evenodd"
                        stroke="rgb(223, 223, 223)"
                        strokeWidth="2px"
                        strokeDasharray="32, 32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        d="M2.000,2.000 C2.000,2.000 154.088,121.789 498.000,158.000 C841.912,194.211 878.088,39.793 1158.000,132.000 C1437.912,224.207 1574.088,59.779 1840.000,86.000 "
                    />
                </svg>
            </div>
        </section>
    );
}
