import React from 'react';
import ServicesOneCard from './ServicesOneCard';
import servicesOneData from './servicesOneData';

function Services1() {
    return (
        <section className="services-wrapper services-1 section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title-3 text-center">
                            <p>Design</p>
                         
                            <h1>LandHelmets</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {servicesOneData.map((item) => (
                        <ServicesOneCard
                            key={item.id}
                            bgImg={item.bgImg}
                            icon={item.icon}
                            heading={item.heading}
                            btnText={item.btnText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services1;
