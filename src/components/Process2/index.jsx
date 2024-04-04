import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../../assets/img/home3/about-3.jpg";
import img2 from "../../assets/img/home3/about-5.jpg";
import img3 from "../../assets/img/home3/flag.svg";
import img4 from "../../assets/img/home3/10.jpg";
import ProcessContent from "./ProcessContent";
import ProcessGrid2 from "./ProcessGrid2";
import IconRow from "../IconRow/index"

import Class1 from '../../assets/img/icon/s1.png';
import Class2 from '../../assets/img/icon/s2.png';
import Class3 from '../../assets/img/icon/s3.png';

function Process2({ type }) {
  const leftAnimation = useRef();
  const rightAnimation = useRef();

  const classIcons = [Class1, Class2, Class3]

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

  // Simplify content based on type
  const contentProps = type === 2 ? {
    gridProps: { img1: img4, img3: img3, img2: true },
    processContentProps: {
      heading: "Multi-Impact Protection: Exceed ANSI/ISEA Z89.1 – 2014, CSA Z94.1 2015, EN 12492 standards for versatile head protection.",
      bullets: [
        "Deluxe replaceable Eco-leather chinstrap, nylon, washable chinstrap which is extremely comfortable and helps avoid irritation in the skin.",
        "Universal accessory slot allows use of existing universal accessories",
        "Size: Universal adjustable",
        "10-year lifespan for enduring protection.",
        "Customization Available: Add your Branded Logo",
        "Advanced Energy Absorption: Features EPS foam for superior impact absorption."
      ],
      text: "",
    },
    sectionTitle: "Introducing M10 Type II",
  } : {
    gridProps: { img1: img1, img3: img2, img2: "" },
    processContentProps: {
      heading: "Empowering brands, our R&D tailors helmets with unique designs and safety at the forefront.",
      text: "Our methodology allows us to beta test concepts in real-world scenarios, ensuring each helmet not only meets stringent safety standards but also adds significant value to our clients. Through this process, we offer the chance to create a helmet line distinctively aligned with the client’s brand, incorporating custom features, designs, and packaging.",
      bullets: [],
    },
    sectionTitle: "From Concept to Your Branded Product",
  };

  return (
    <section className="promo-featured-wrapper pt-5">
      <div className="container">
        <div className="row align-center">
          <div ref={leftAnimation} className="col-xl-5 col-12 text-center">
            <ProcessGrid2 {...contentProps.gridProps} />
          </div>
          <div ref={rightAnimation} className="col-xl-7 col-12 mt-5 mt-xl-0">
            <div className="block-contents ml-xl-5 ml-50">
              <div className="section-title-3">
                <p className="pl-50 pr-50">From Ideas to Impact</p>
                <h1>{contentProps.sectionTitle}</h1>

                <div className="helmets-dark">
                <IconRow icons={classIcons} />
                </div>
              </div>
              <ProcessContent {...contentProps.processContentProps} />
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