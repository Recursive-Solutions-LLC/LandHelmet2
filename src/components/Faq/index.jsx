import React from 'react';
import man1 from '../../assets/img/man1.png';
import bgImg from '../../assets/img/map_pattern.png';
import FaqAccordion from '../FaqAccordion';

function Faq() {
    return (
        <section className="faq-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="section-title-3 text-center">
                        <p>Global</p>
                        <h1>Our Network Spans Continents for Fast Delivery</h1>
                    </div>
                    <div className="col-xl-6 col-12 mt-4">
                        <div className="content-block">



                            <div className="bg-img">
                                <img className="bg-map" src={bgImg} alt="" />
                                <div
                                    className="man bg-cover man-1"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                                <div
                                    className="man bg-cover man-2"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                                <div
                                    className="man bg-cover man-3"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 mt-4 mt-xl-0">

                        <div className="faq-content">
                            <FaqAccordion
                                question="Uncompromised Quality: Our Assurance to You"
                                answer="Highlight the rigorous testing and validation process to ensure the highest quality standards"
                            />
                            <FaqAccordion
                                question="Excellence in Manufacturing: In-House Production"
                                answer="Discuss the flexibility and efficiency of managing production in-house, from small to large volumes"
                            />
                            <FaqAccordion
                                question="Based in the USA: Innovation and Quality Hub"
                                answer="Our headquarters in the USA are the heart of our innovation and quality, leveraging the nation's advanced infrastructure and skilled workforce. This strategic location enables us to uphold excellence across our operations."
                            />
                            <FaqAccordion
                                question="Manufacturing Excellence: Made in China"
                                answer="Our products are crafted in China, combining rich craftsmanship traditions with cutting-edge technology. This ensures every item meets our high standards of quality and innovation, from fabric to finish."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
