import React from 'react';
import ServicesOneCard from './ServicesOneCard';
import servicesOneData from './servicesOneData';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
function Services1() {
    const leftAnimation = useRef();
    useEffect(() => {
        // Asegúrate de registrar ScrollTrigger si aún no lo has hecho.
        gsap.registerPlugin(ScrollTrigger);
    
        // Animación para el elemento de la izquierda
        gsap.fromTo(
          leftAnimation.current,
          { x: 100, autoAlpha: 0 }, // Estado inicial
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
        <section   className="services-wrapper services-1 section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title-3 text-center">
                            <p>Design</p>
                         
                            <h1>LandHelmets</h1>
                        </div>
                    </div>
                </div>
                <div ref={leftAnimation}  className="row">
                    {servicesOneData.map((item) => (
                        <ServicesOneCard
                            key={item.id}
                            bgImg={item.bgImg}
                            icon={item.icon}
                            heading={item.heading}
                            btnText={item.btnText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services1;
