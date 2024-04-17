// Faq.js
import React, { useRef, useEffect } from 'react';
import FaqAccordion from '../FaqAccordion';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import helmetFaq from "../../content/helmetFaq";

function Faq({ bgImg, type }) {
    const leftAnimation = useRef();
    const rightAnimation = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const animate = (element, x) => {
            gsap.fromTo(
                element.current,
                { x, autoAlpha: 0 },
                {
                    x: 0,
                    autoAlpha: 1,
                    duration: 2,
                    scrollTrigger: {
                        trigger: element.current,
                        start: "top bottom",
                        toggleActions: "play none none none",
                    },
                }
            );
        };
    
        animate(leftAnimation, -100);
        animate(rightAnimation, 100);
    
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    const faqs = helmetFaq[type] || [];


    return (
        <section className="faq-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="section-title-3 text-center">
                        <h1 className='pb-5'>TECHNOLOGIES</h1>
                    </div>
                    <div ref={leftAnimation} className="col-xl-6 col-12 mt-5">
                        <div className="content-block">
                            <div className="bg-img">
                                <img src={bgImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div ref={rightAnimation} className="col-xl-6 col-12 mt-4 mt-xl-0">
                        <div className="faq-content">
                            {faqs.map(faq => (
                                <FaqAccordion key={faq.question} isExpanded={faq.isExpanded}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
