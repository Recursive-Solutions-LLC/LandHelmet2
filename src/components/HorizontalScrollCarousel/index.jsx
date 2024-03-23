import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// Asumiendo que tienes tus estilos en este archivo
import { Image } from 'react-bootstrap';
import black from '../../assets/img/gallery/Black.png';
import carbon from '../../assets/img/gallery/Carbon.png';
import backhelmet from '../../assets/img/gallery/backhelmet.png';
import blue from '../../assets/img/gallery/blue.png';
import green from '../../assets/img/gallery/green.png';
import orange from '../../assets/img/gallery/orange.png';
import pink from '../../assets/img/gallery/pink.png';
import red from '../../assets/img/gallery/red.png';
import roval from '../../assets/img/gallery/roval.png';
import sidehelmet from '../../assets/img/gallery/sidehelmet.png';
import whitehelmets from '../../assets/img/gallery/white-helmets.png';
import yellow from '../../assets/img/gallery/yellow.png';
import './App.scss';
const cards = [
[  {
  url:  black,

},  {
  url:  carbon,

},  {
  url:  backhelmet,

},  {
  url:  blue,

},],[  {
  url:  green,

},  {
  url:  orange,

},  {
  url:  pink,

},  {
  url:  red,

},],[  {
  url:  roval,

},  {
  url:  sidehelmet,

},  {
  url:  whitehelmets,

},  {
  url:  yellow,

},]
  
];
const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [galleries, setGalleries] = useState([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const numGalleries = 3;
    const newGalleries = [];

    for (let i = 0; i < numGalleries; i++) {
      const numImages = 4;
      const images = [];

      for (let j = 0; j < numImages; j++) {
        const imageSrc = cards[i][j].url;
        images.push(imageSrc);
      }

      newGalleries.push({
        id: i,
        images: images,
      });
    }

    setGalleries(newGalleries);

    // Asegurar que ScrollTrigger limpie los triggers al desmontar el componente
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Asegúrate de que ScrollTrigger se inicialice después de que las imágenes se hayan cargado.
    sectionsRef.current.forEach((section, index) => {
      const w = section.querySelector('.wrapper');
      const [x, xEnd] = index % 2 === 0 
      ? [w.scrollWidth * -1, 0] 
      : ['100%', (w.scrollWidth - section.offsetWidth) * -1];

    // Primera animación GSAP
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5,
      },
    });

    gsap.fromTo(
      w.children, 
      { x: index % 2 === 0 ? 20 : 30, autoAlpha: 0.5 },
      {
        x: 0,
        autoAlpha: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
  }, [galleries]);

  return (
    <section className="timeline-wrapper section-padding">
    <div className="container">
        <div className="row mb-30">
            <div className="col-12 col-lg-12">
                <div className="section-title-3 text-center">
               
                    <p>Colors</p>
                    <h1>LAND HELMET M12</h1>
                </div>
            </div>
        </div>
    </div>
    <div className='horizontal'>
    <div className=" demo-wrapper">
      {galleries.map((gallery, i) => (
        <section key={gallery.id} ref={el => sectionsRef.current[i] = el} className="demo-gallery">
          <div className="wrapper">
            {gallery.images.map((src, index) => (
              <img key={index} src={src} alt={`Gallery ${gallery.id} image ${index}`} />
            ))}
          </div>
        </section>
      ))}
    </div></div></section>
  );
};

export default App;