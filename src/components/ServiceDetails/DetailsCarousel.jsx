import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import img1 from '../../assets/img/gallery/1.jpg';
import img2 from '../../assets/img/gallery/2.jpg';
import img3 from '../../assets/img/gallery/3.jpg';

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);


function DetailsCarousel({ carouselImg }) {
    return (
        <div>
            <Swiper navigation pagination className="service-gallery">
                {carouselImg.map(image => (
                    <>
                        <SwiperSlide>
                            <div
                                className="single-service-photo bg-cover"
                                style={{ backgroundImage: `url(${image.img})` }}
                            />
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
        </div>
    );
}

export default DetailsCarousel;
