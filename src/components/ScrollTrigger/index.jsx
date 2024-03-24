
import "./app.scss"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import img1 from '../../assets/img/gallery/1.png'; 
import img2 from '../../assets/img/gallery/2.png';
 import img3 from '../../assets/img/gallery/3.png';
const ShoeAnimation = () => {
    const shoeRef = useRef(null);
    const midsoleRef = useRef(null);
    const outsoleRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: shoeRef.current,
                start: "center center",
                end: "bottom top",
                scrub: true,
                pin: true
            }
        });

        tl.from(midsoleRef.current, { y: window.innerHeight * 1.5 })
            .from(outsoleRef.current, { y: window.innerHeight * 1.5 });

        // Opcional: Limpieza al desmontar el componente
        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);


    return (
        <section className="promo-featured-wrapper ">
        <div className="container">

                 
            <div className=" align-center">
         
              
           
            <div className='scroll'>
            <section className="shoe" ref={shoeRef}>

            <div className="section-title-3 text-center">
                            <p>Premium Materials</p>
                         
                            <h1>Unmatched Quality</h1>
                        </div>
                <img src={img3} className="outsole piece" alt="outsole" ref={outsoleRef} />
                <img src={img1} className="heel piece" alt="heel" />
                <img src={img2}  className="midsole piece" alt="midsole" ref={midsoleRef} />
            </section>
    </div>
            
               
              
            </div>
        </div>
    </section>
    
    )
}
export default ShoeAnimation;