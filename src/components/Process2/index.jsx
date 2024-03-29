import React from 'react';
import img1 from '../../assets/img/home3/about-3.jpg';

import img2 from '../../assets/img/home3/about-5.jpg';
import ProcessContent from './ProcessContent';
import ProcessGrid2 from './ProcessGrid2';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
function Process2() {
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
        <section className="promo-featured-wrapper section-padding">
            <div className="container">
                <div className="row align-center">
                    <div ref={leftAnimation}  className="col-xl-5 col-12 text-center">
                        <ProcessGrid2 img1={img1} img3={img2} img2="" />
                    </div>
                    <div ref={rightAnimation}  className="col-xl-7 col-12 mt-5 mt-xl-0">
                        <div className="block-contents ml-xl-5 ml-50">
                            <div className="section-title-3">
                                <p className="pl-50 pr-50">Bespoke R&D</p>
                                <h1>From Concept to Your Branded Product</h1>
                            </div>
                            <ProcessContent
                                heading=" Empowering brands, our R&D tailors helmets with unique designs and safety at the forefront."
                                text="Our methodology allows us to beta test concepts in real-world scenarios, ensuring each helmet not only meets stringent safety standards but also adds significant value to our clients. Through this process, we offer the chance to create a helmet line distinctively aligned with the client’s brand, incorporating custom features, designs, and packaging."
                            />
                            <a href="/services-details-rd" className="theme-btn theme-3">
                            Discover Custom R&D Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process2;
