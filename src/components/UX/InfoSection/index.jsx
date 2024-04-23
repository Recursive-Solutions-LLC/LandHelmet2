import React from 'react';
import InfoCard from '../InfoCard2';

function InfoSection({ content }) {

    const renderInfoCards = content.map((data, index) => (
        <InfoCard key={index}
            content={data}
        />
    ))
    
    return (
        <section className="section-padding">
            <div className="services-grid center-content">
                {renderInfoCards}
            </div>
        </section>
    );
}

export default InfoSection;
