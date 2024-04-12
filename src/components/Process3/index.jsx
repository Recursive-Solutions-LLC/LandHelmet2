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
import Banner1Img from "../../assets/img/capabilities/InHouse/banner1.png"
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
      heading: "We'll guide you from concept to a tangible manifestation of your product. Whether you require a mechanical mockup for functional testing or investor presentations, an appearance model to visualize the look and feel of your product precisely, or a rapid 3D print to grasp its real-world scale",
      bullets: [
        " Deluxe replaceable Eco-leather chinstrap, nylon, washable chinstrap which is extremely comfortable and helps avoid irritation in the skin.",
        " Universal accessory slot allows use of existing universal accessories",
        " Size: Universal adjustable",
        " 10-year lifespan for enduring protection.",
        " Customization Available: Add your Branded Logo",
        " Advanced Energy Absorption: Features EPS foam for superior impact absorption."
      ],
      text: "",
    },
    sectionTitle: "Introducing M10 Type II",
  } : {
    gridProps: { img1: Banner1Img, img3: "", img2: "" },
    processContentProps: {
      heading: "We'll guide you from concept to a tangible manifestation of your product. Whether you require a mechanical mockup for functional testing or investor presentations, an appearance model to visualize the look and feel of your product precisely, or a rapid 3D print to grasp its real-world scale",
      bullets: [
        " Prototyping serves to diminish development costs by pinpointing and remedying design flaws prior to full-scale production.",
        " It empowers you to pinpoint and tackle potential quality concerns early on in the development phase.",
        " Presenting potential investors with a physical prototype enhances your pitch, showcasing a robust concept.",
        " Prototypes facilitate the evaluation of design functionality in real-world scenarios, allowing for invaluable feedback and the enhancement of user experience."
      ],
      text: "",
    },
    sectionTitle: "Protyping",
  };

  return (
    <section className="promo-featured-wrapper section-padding">
      <div className="container">
        <div className="row align-center">
          <div ref={leftAnimation} className="col-xl-5 col-12 text-center">
            <ProcessGrid2 {...contentProps.gridProps} />
          </div>
          <div ref={rightAnimation} className="col-xl-7 col-12 mt-5 mt-xl-0">
            <div className="block-contents ml-xl-5 ml-50">
              <div className="section-title-3">
              
                <h1>{contentProps.sectionTitle}</h1>
       </div>
              <ProcessContent {...contentProps.processContentProps} />
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process2;