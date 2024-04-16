import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import PortfolioThreeItem from './PortfolioThreeItem';
import { gsap } from "gsap";
import ApprochCard from './ApprochCard';
import { useRef, useEffect } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
function Portfolio3() {
    const leftAnimation = useRef();
    const renderAproachCards = PortfolioThreeItem.map((data) => (
        <ApprochCard
            key={data.id}
            thumbnail={data.thumb}
            icon={data.icon}
            heading={data.heading}
            text={data.text}
            btnText={data.btnText}
            pageLink={data.pageLink}
        />
    ))
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
    const renderCard = <div></div>
    return (
        <section className="portfolio-wrapper cases-carousel-wrapper  ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                        <div className="section-title-6">

                            <h1>Elevate your Safety Standards</h1>
                            <p className='pt-5'>Experience piece of mind and comfort with our cutting-edge safety helmets. Crafted to meet the latest ANSI and EN standards, they offer unparalleled comfort through easy adjustments and superior breathability, ensuring all-day wear without compromise.</p>
                        </div>
                    </div>
                </div>
            </div>
         
            <div className=" bg-dark pt-5 pb-10b">
         
                    <div className="col-lg-12 col-12 text-center ">
                    <h2 className='collection' >OUR COLLECTION</h2>
             
                </div>
                <div className='container'>
                <div className='row'>
                {renderAproachCards}
                </div>
                </div>
             
            </div>

        </section>
    );
}

export default Portfolio3;
