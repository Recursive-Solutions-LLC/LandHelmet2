import React from 'react';
import man1 from '../../assets/img/man1.png';
import bgImg from '../../assets/img/map2.svg';
import FaqAccordion from '../FaqAccordion';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
function Faq() {
    const leftAnimation = useRef();
    const rightAnimation = useRef();
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
    
        // Animación para el elemento de la derecha
        gsap.fromTo(
          rightAnimation.current,
          { x: 100, autoAlpha: 0 }, // Estado inicial
          {
            x: 0, // Estado final
            autoAlpha: 1, // Aparece gradualmente
            duration: 2,
            scrollTrigger: {
              trigger: rightAnimation.current, // Elemento que dispara la animación
              start: "top bottom",// La animación comienza cuando la parte superior del trigger llega al centro de la ventana
              // Ajusta "start" y "end" como sea necesario
              toggleActions: "play none none none", // Define cómo se reproducen o revierten las animaciones
            },
          }
        );
    
        // Opcional: Limpieza en el efecto para evitar duplicaciones o comportamiento inesperado en re-renderizados
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);
    return (
        <section className="faq-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="section-title-3 text-center">
                        <p>Global</p>
                        <h1>Our Network Spans Continents for Fast Delivery</h1>
                    </div>
                    <div ref={leftAnimation}  className="col-xl-6 col-12 mt-4">
                        <div className="content-block">



                            <div className="bg-img">
                                <img className="bg-map" src={bgImg} alt="" />
                                <div
                                    className="man bg-cover man-1"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                                <div
                                    className="man bg-cover man-2"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                                <div
                                    className="man bg-cover man-3"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div ref={rightAnimation}  className="col-xl-6 col-12 mt-4 mt-xl-0">

                        <div className="faq-content">
                            <FaqAccordion
                                question="Uncompromised Quality: Our Assurance to You"
                                answer="Highlight the rigorous testing and validation process to ensure the highest quality standards"
                            />
                            <FaqAccordion
                                question="Excellence in Manufacturing: In-House Production"
                                answer="Discuss the flexibility and efficiency of managing production in-house, from small to large volumes"
                            />
                            <FaqAccordion
                                question="Based in the USA: Innovation and Quality Hub"
                                answer="Our headquarters in the USA are the heart of our innovation and quality, leveraging the nation's advanced infrastructure and skilled workforce. This strategic location enables us to uphold excellence across our operations."
                            />
                            <FaqAccordion
                                question="Manufacturing Excellence: Made in China"
                                answer="Our products are crafted in China, combining rich craftsmanship traditions with cutting-edge technology. This ensures every item meets our high standards of quality and innovation, from fabric to finish."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
