import React from 'react';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import aboutImg from '../../assets/img/about_us.jpg';

function AboutFeatured({ aboutContent }) {
    const { title, subtitle, text, right } = aboutContent;

    // Determine the order of the columns based on the 'right' property
    const imageColumnClass = right ? "order-lg-2" : "";
    const textColumnClass = right ? "order-lg-1" : "";

    return (
        <section className="about-featured-wrapper pt-5 mt-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Adjust the order of this column based on 'right' */}
                    <div className={`col-xl-6 col-lg-5 col-12 ${imageColumnClass}`}>
                        <div
                            className="about-promo bg-cover"
                            style={{ backgroundImage: `url(${aboutImg})` }}
                        />
                    </div>

                    {/* Adjust the order of this column based on 'right' */}
                    <div className={`col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0 ${textColumnClass}`}>
                        <div className="block-contents ml-lg-5">
                            <span>{subtitle}</span>
                            <h1>{title}</h1>
                            <h4>
                                {text}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutFeatured;
