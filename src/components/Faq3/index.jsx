import React from 'react';

import bgImg from '../../assets/img/products/type-II/typeII_key.png';
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
                   
                        <h1 className='pb-5'>TECHNOLOGIES</h1>
                    </div>
                    <div ref={leftAnimation}  className="col-xl-6 col-12 mt-5">
                        <div className="content-block">



                            <div className="bg-img">
                                <img  src={bgImg} alt="" />
                              
                            </div>
                        </div>
                    </div>
                    <div ref={rightAnimation}  className="col-xl-6 col-12 mt-4 mt-xl-0">

                        <div className="faq-content">
                            <FaqAccordion isExpanded={true}
                                question="Detachable Patent Adjustment in the features"
                                answer="Ultra lightweight shell made with ABS material provides superior protection"
                            />
                            <FaqAccordion isExpanded={true}
                                question="Unmatched Safety Standards"
                                answer="Our type I helmets are ANSI Z89.1-2014 (R2019) certified, ensuring they meet the highest safety requirements for impact protection in the industry. Designed to safeguard against top impacts, these helmets are essential where vertical protection is critical"
                            />
                            <FaqAccordion
                                question="Durable Construccion"
                                answer="Made with ABS Advanced Termo Material Shell and equipped with high-density EPS polystyrene for inner protection, our helmets are built to withstand harsh conditions while providing superiorimpact absorption"
                            />
                            <FaqAccordion
                                question="Comfort for All-Day Wear"
                                answer="With a weight of just 430g and featuring an adjustable ratchet system, our Type I helmet offers a comfortable fit that can be tailored to any head size, ensuring comfort throughout the workday"
                            />
                              <FaqAccordion
                                question="Versatile Functionality"
                                answer=" The helmet includes features such as lamp clips for night work, slots for earmuffs, and a range of compatible visors, making it adaptable for a wide variety of job sites and tasks."
                            />
                                 <FaqAccordion
                                question="Long-Term Investment"
                                answer="  Offering a 10-years lifespan, our Type I helmet represents a long-lasting solution to your safety needs, ensuring reliability and protection for years to come.
                                Applications"
                            />
                            
                           
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
