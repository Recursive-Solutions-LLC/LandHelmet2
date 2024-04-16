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
                    <div className="section-title-3 text-center mb-5">
                        <p>Global Quality Assurance</p>
                        <h1>Product Development & Manufacturing seamlessly Delivered</h1> 
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
                                question="Get Started For Less"
                                answer="Rather than investing in the equipment, training, and staff to manufacture your product, contract manufacturing organizations have the resources and experience to get you going. You can even take advantage of a contract manufacturing services' scalability and industry connections to keep costs down as production of your product increases."
                            />
                            <FaqAccordion
                                question="Enhanced Cost Efficiency"
                                answer="Our established network empowers us to negotiate better deals with our manufacturing partners. Improved lead times, and access to cutting-edge technology and materials, ultimately providing you with a competitive edge in the market and enhancing your product offerings."
                            />
                            <FaqAccordion
                                question="Exceed Your Quality Expectations"
                                answer="Clearly communicating and managing quality and performance levels with your selected contract manufacturer can help alleviate costly issues. Our team is here to take care of ongoing quality management with your outsourced manufacturer."
                            />
                            <FaqAccordion
                                question="Manufacturing Deployment"
                                answer="Our goal is to quickly get your product into production so it can produce revenue, or meet your company's business objectives"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
