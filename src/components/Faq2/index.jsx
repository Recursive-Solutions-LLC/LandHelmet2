import React from 'react';
import faqImg from '../../assets/img/home3/faq_man.png';
import faqBg from '../../assets/img/map.svg';
import FaqAccordion from '../FaqAccordion';

function Faq2() {
    return (
        <section
            className="faq-section faq-2 section-padding bg-contain"
            style={{ backgroundImage: `url(${faqBg})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-12 d-none d-xl-block">
                        <div className="faq-left-img">
                            <div className="man-img">
                                <img src={faqImg} alt="man" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-12">
                        <div className="section-title-3 mb-40">
                            <p>faq</p>
                            <h1>Get Every Answers</h1>
                        </div>

                        <div className="faq-content">
                            <FaqAccordion
                                question="Lorem ipsum dolor sit amet"
                                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                            />
                            <FaqAccordion
                                question="Lorem ipsum dolor sit amet"
                                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                            />
                            <FaqAccordion
                                question="Lorem ipsum dolor sit amet"
                                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                            />
                            <FaqAccordion
                                question="Lorem ipsum dolor sit amet"
                                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                            />
                            <FaqAccordion
                                question="Lorem ipsum dolor sit amet"
                                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq2;
