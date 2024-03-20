import React from 'react';
import faqImg from '../../../assets/img/home3/faq_man.png';
import faqBg from '../../../assets/img/map_faq.png';
import FaqAccordion from '../../FaqAccordion';
import portfolioOneData from '../Portfolio1/porfolioOneData';

function Faq2({ type }) {
    const { keyFeatures } = portfolioOneData.filter(element => element.productType === type)[0];
    console.log(keyFeatures);

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
                            <h1>Key Features</h1>
                        </div>

                        <div className="faq-content">
                            {keyFeatures.map(feature => (
                                <FaqAccordion question={feature.title} answer={feature.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq2;
