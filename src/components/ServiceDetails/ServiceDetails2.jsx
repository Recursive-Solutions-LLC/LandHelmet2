import React from 'react';
import DetailsContent2 from './DetailsContent2';
import DetailsAccordion from "./DetailsAccordion"
function ServiceDetails({ content }) {
    const { sections, faqs } = content
    const renderDetailsAccordion = faqs.map((faq ,index) => {
        const { title, text, list,  } = faq;
        return (
            <div className="section-padding-top">
                <DetailsAccordion key={index} title={title} text={text} list={list} />
            </div>
        )
    })
    return (
        <div className="service-details-content-wrapper pl-0 pl-md-4">
            <DetailsContent2 sections={sections} />
            {renderDetailsAccordion}
        </div>
    );
}

export default ServiceDetails;
