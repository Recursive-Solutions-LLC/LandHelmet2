import React from 'react';
// import DetailsCarousel from './DetailsCarousel';
import DetailsContent from './DetailsContent';
import DetailsAccordion from "./DetailsAccordion"

function ServiceDetails({ content }) {
    const { sections } = content

    return (
        <div className="service-details-content-wrapper pl-0 pl-md-4">
            <DetailsContent sections={sections} />
        </div>
    );
}

export default ServiceDetails;
