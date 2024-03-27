import React from 'react';
// import DetailsCarousel from './DetailsCarousel';
import DetailsContent from './DetailsContent';
import DetailsAccordion from "./DetailsAccordion"

function ServiceDetails({ content }) {
    const { sections, faqs } = content
    const renderDetailsAccordion = faqs.map((faq ,index) => {
        const { title, text, list } = faq;
        return (<DetailsAccordion key={index} title={title} text={text} list={list} />)
    })
    return (
        <div className="service-details-content-wrapper pl-0 pl-md-4">
            <DetailsContent sections={sections} />
            {renderDetailsAccordion}
        </div>
    );
}

export default ServiceDetails;
