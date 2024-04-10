import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProcessContent from "./ProcessContent";
import ProcessGrid2 from "./ProcessGrid2";

function Process2({ content }) {
  const leftAnimation = useRef();
  const rightAnimation = useRef();


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers = [
      { ref: leftAnimation, x: -100 },
      { ref: rightAnimation, x: 100 },
    ];

    triggers.forEach(({ ref, x }) => {
      gsap.fromTo(
        ref.current,
        { x, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);



  return (
    <section className="promo-featured-wrapper section-padding">
      <div className="container">
        <div className="row align-center">
          <div ref={leftAnimation} className="col-xl-5 col-12 text-center">
            <ProcessGrid2 {...content.gridProps} />
          </div>
          <div ref={rightAnimation} className="col-xl-7 col-12 mt-5 mt-xl-0">
            <div className="block-contents ml-xl-5 ml-50">
              <div className="section-title-3">
                <p className="pl-50 pr-50">From Ideas to Impact</p>
                <h1>{content.sectionTitle}</h1>

                <div className="helmets-dark">
                </div>
              </div>
              <ProcessContent {...content.processContentProps} />
              <a href="/services-details-rd" className="theme-btn theme-3">
                More Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process2;