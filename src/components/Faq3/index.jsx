import React from 'react';

import FaqAccordion from '../FaqAccordion';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';

function Faq({bgImg, type}) {

    const leftAnimation = useRef();
    const rightAnimation = useRef();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          leftAnimation.current,
          { x: -100, autoAlpha: 0 },
          {
            x: 0, 
            autoAlpha: 1, 
            duration: 2,
            scrollTrigger: {
                start: "top bottom", 
    
              trigger: leftAnimation.current, 
              toggleActions: "play none none none",
            },
          }
        );
    
        gsap.fromTo(
          rightAnimation.current,
          { x: 100, autoAlpha: 0 },
          {
            x: 0, 
            autoAlpha: 1, 
            duration: 2,
            scrollTrigger: {
              trigger: rightAnimation.current, 
              start: "top bottom",
              toggleActions: "play none none none", 
            },
          }
        );
    
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
                            {type ==='M12' &&  < FaqAccordion isExpanded={true}
                                question="Unmatched Safety Standards"
                                answer="Our type I helmets are ANSI Z89.1-2014 (R2019) certified, ensuring they meet the highest safety requirements for impact protection in the industry. Designed to safeguard against top impacts, these helmets are essential where vertical protection is critical"
                            />}
                               {type ==='M10' &&  < FaqAccordion isExpanded={true}
                                question="Unmatched Safety Standards"
                                answer="Our safety helmet type II ANSI/CSA Z89.1 meets highest safety requirements for impact protection in the industry. Designed to safeguard against top impacts, these helmets are essential where vertical protection is critical"
                            />}
                             {type ==='M02' &&  < FaqAccordion isExpanded={true}
                                question="Unmatched Safety Standards"
                                answer="Our climbing M02 helmet meets highest safety standard EN 397, EN 12492, ensuring they meet the highest safety requirements for impact protection in the industry. Designed to safeguard against top impacts, these helmets are essential where vertical protection is critical"
                            />}
                          
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
