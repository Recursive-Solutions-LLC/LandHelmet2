import React, { useState, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/img/home3/hero-3.png';
import heroImg1 from '../../assets/img/home3/hero1.jpeg';


import heroImg4 from '../../assets/img/home3/hero4.jpg';
import heroImg5 from '../../assets/img/home3/hero5.jpeg';
import heroImg6 from '../../assets/img/home3/hero6.jpeg';
import heroImg7 from '../../assets/img/home3/hero7.jpeg';
import heroImg8 from '../../assets/img/home3/hero8.jpeg';

import heroImg10 from '../../assets/img/home3/hero10.jpeg';
import heroImg11 from '../../assets/img/home3/hero11.jpeg';

import heroImg14 from '../../assets/img/home3/hero14.jpeg';
import heroImg15 from '../../assets/img/home3/hero15.jpeg';
import heroImg17 from '../../assets/img/home3/hero17.jpeg';
import heroImg18 from '../../assets/img/home3/hero18.jpeg';


import heroImg22 from '../../assets/img/home3/hero22.jpeg';
import { gsap } from "gsap";
import { useRef} from "react";

function Hero3() {
    const images = [
        heroImg,
        heroImg1,
      

        heroImg4,
        heroImg5,
        heroImg6,
        heroImg7,
        heroImg8,

        heroImg10,
        heroImg11,
  

        heroImg14,
        heroImg15,

        heroImg17,
        heroImg18,
  
        heroImg22,
      ];
      
      const [currentImage, setCurrentImage] = useState(0);

    

      
    const leftAnimation = useRef();
    const rightAnimation = useRef();
    const imageRef = useRef(); 
    useEffect(() => {
        // Cambia la imagen cada 1 segundo y aplica animaciones
        const interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);

          // Aplica animación de entrada cada vez que la imagen cambia
          gsap.to(imageRef.current, {
            opacity: 0.5,
            duration: 0.1,
            ease: "power1.out",
          }).then(() => {
            // Aquí actualizas el estado para cambiar la imagen, asegúrate de que esto suceda
            // justo antes de iniciar el fade in para minimizar el tiempo sin imagen visible.
            gsap.to(imageRef.current, {
              opacity: 1,
              duration: 0.5,
              ease: "power1.in",
            });
          });;

        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        // Animaciones iniciales para otros elementos
        gsap.fromTo(leftAnimation.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
        gsap.fromTo(rightAnimation.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
    }, []);
    const hltmRender =
    <div ref={imageRef} 
      className="hero-img bg-cover"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        transition: 'background-image 0.5s ease-in-out', // Animación suave
      }}
    />
    return (
        <section className="hero-slide-wrapper hero-3">
            <div className="slide-items">
                <div className="single-slide bg-cover">
                    <div className="container">
                        <div className="row align-items-center text-center text-xl-start">
                            <div ref={leftAnimation} className="col-12 col-lg-8 offset-lg-2 offset-xl-0 col-xl-7">
                                <div className="hero-contents">
                                    <p>Feel the Future, Embrace the Experience</p>
                                    <h1>Passionately User Focused</h1>
                                    <Link to="/services" className="theme-btn theme-3">
                                        Our Services <BsArrowRight />
                                    </Link>
                                    <Link to="/about" className="theme-btn theme-3">
                                        learn more
                                    </Link>
                                </div>
                            </div>
                            <div ref={rightAnimation}  className="col-xl-5 d-none d-xl-block">
                              {hltmRender}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero3;
