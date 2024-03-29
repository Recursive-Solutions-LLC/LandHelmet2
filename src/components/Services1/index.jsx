import React, { useRef, useEffect } from 'react';
import ServicesOneCard from './ServicesOneCard';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

function Services1({ hasTitle, data, title }) {
    const leftAnimation = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            leftAnimation.current,
            { x: 100, autoAlpha: 0 },
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

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const renderTitle = hasTitle ? <p>Design</p> : null;
    const noTitle = hasTitle ? "" : "pt-5";


    const renderServices = data.map((item) => (
        <ServicesOneCard
            key={item.id}
            bgImg={item.bgImg}
            icon={item.icon}
            heading={item.heading}
            btnText={item.btnText}
        />
    ));

    return (
        <section className="services-wrapper services-1 section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title-3 text-center">
                            {renderTitle}
                            <h1 className={noTitle}>{title}</h1>
                        </div>
                    </div>
                </div>
                <div ref={leftAnimation} className="row" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {renderServices}
                </div>
            </div>
        </section>
    );
}

export default Services1;
