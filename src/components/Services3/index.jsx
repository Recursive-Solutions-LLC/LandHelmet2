import React from 'react';
import ServicesThreeCard from './ServicesThreeCard';
import servicesThreeData from './servicesThreeData';

function Services3() {
    return (
        <section className="services-wrapper services-2 section-padding pt-5">
            <div className="section-title-5 text-center center-content">

                <h1>Your Best Helmet Solution Provider </h1>
                <h4 >We're thrilled to present our unparalleled ODM y OEM capabilities tailored specifically for safety helmets. As a pioneering force in the industry, we understand the critical importance of superior quality, innovative design, and uncompromising safety standards</h4>
            </div>
            <div className="services-grid pt-5 center-content">

                {servicesThreeData.map((data) => (
                    <ServicesThreeCard
                        key={data.id}
                        thumb={data.thumbnail}
                        index={data.index}
                        heading={data.heading}
                        subHeading={data.subHeading}
                        text={data.text}
                    />
                ))}
            </div>
        </section>
    );
}

export default Services3;
