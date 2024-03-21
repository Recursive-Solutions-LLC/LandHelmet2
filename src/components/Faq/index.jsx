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
                                <img src={bgImg} alt="" />
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
                                question="Global Reach, Local Service: Our Distribution Network"
                                answer="Showcase the global distribution capabilities, emphasizing timely delivery and support in key markets (US, Canada, Europe, Latin America)"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
