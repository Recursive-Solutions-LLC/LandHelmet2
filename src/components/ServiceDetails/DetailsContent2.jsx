import React from 'react';
import SwiperCore, {    Autoplay, Navigation } from 'swiper';
import {  SwiperSlide, Swiper } from 'swiper/react';

import PortfolioOneSlide from '../Portfolio1/PortfolioOneSlide';
import 'swiper/swiper-bundle.min.css';



function DetailsContent({ sections }) {

SwiperCore.use([Navigation, Autoplay]);
    const renderSections = sections && sections.map((element, index) => (
        <SwiperSlide key={index}>
            <PortfolioOneSlide
                style={{ height: "100%" }} // Note: Corrected "heigth" to "height"
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
    ));
    const renderSectionsContainer =     sections ?       < section className="portfolio-section pb-24">

    <div className="container">
        <div className="project-wrapper">
            <Swiper    
            autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}  
        modules={[Autoplay, Navigation]}
        
        navigation={true} className="portfolio-carousel-active owl-carousel">
                {renderSections}
            </Swiper>
        </div>
    </div>
</section > : <></>

    return (
    renderSectionsContainer
    );
}

export default DetailsContent;
