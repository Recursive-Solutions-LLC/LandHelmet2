import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import portfolioTwoData from './porfolioTwoData';
import PortfolioTwoItem from './PortfolioTwoItem';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
function Portfolio2() {
    const leftAnimation = useRef();

    useEffect(() => {
        // Asegúrate de registrar ScrollTrigger si aún no lo has hecho.
        gsap.registerPlugin(ScrollTrigger);
    
        // Animación para el elemento de la izquierda
        gsap.fromTo(
          leftAnimation.current,
          { x: -100, autoAlpha: 0 }, // Estado inicial
          {
            x: 0, // Estado final
            autoAlpha: 1, // Aparece gradualmente
            duration: 2,
            scrollTrigger: {
                start: "top bottom", // La animación comienza cuando la parte inferior del viewport toca la parte inferior del trigger
    
              trigger: leftAnimation.current, // Elemento que dispara la animación
             // La animación comienza cuando la parte superior del trigger llega al centro de la ventana
              // Puedes ajustar "start" y "end" según necesites
              toggleActions: "play none none none", // Define cómo se reproducen o revierten las animaciones
              // Opciones de toggleActions: play, pause, resume, reset, restart, complete, reverse, none
            },
          }
        );
    
   
    
        // Opcional: Limpieza en el efecto para evitar duplicaciones o comportamiento inesperado en re-renderizados
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);
    
    return (
        <section className="portfolio-wrapper cases-carousel-wrapper section-padding section-bg ">
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
                {portfolioTwoData.map((data,index) => (
                    <SwiperSlide key={index}>
                        <PortfolioTwoItem
                            key={data.id}
                            img={data.image}
                            name={data.name}
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
