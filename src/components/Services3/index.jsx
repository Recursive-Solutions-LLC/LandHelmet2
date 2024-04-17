import React from 'react';
import ServicesThreeCard from './ServicesThreeCard';
import servicesThreeData from './servicesThreeData';

function Services3() {
    return (
        <>
            <section className="section-padding-top services-wrapper services-2 ">
                <div className="section-title-5 text-center center-content pt-4 pb-4">

                    <h1 className="">Your Best Helmet Solution Provider </h1>
                    <p className='pb-4 pt-0'>We're thrilled to present our unparalleled ODM & OEM capabilities tailored specifically for safety helmets. As a pioneering force in the industry, we understand the critical importance of superior quality, innovative design, and uncompromising safety standards</p>
                </div>

            </section>
            <section className="section-padding">
                <div className="services-grid center-content">

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
        </>
    );
}

export default Services3;
