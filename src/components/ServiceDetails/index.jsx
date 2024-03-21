import React from 'react';
// import DetailsCarousel from './DetailsCarousel';
// import DetailsContent from './DetailsContent';
import DetailsAccordion from "./DetailsAccordion"

function ServiceDetails({faqs}) {


    const renderDetailsAccordion = faqs.map((faq)=>{
        const {title,text, list} = faq;

        return(  <DetailsAccordion  title={title} text={text} list={list} />)
    })
    
    return (
        <div className="service-details-content-wrapper pl-0 pl-md-4">
            {/* <DetailsCarousel type={type} />
            <DetailsContent type={type} /> */}
            {renderDetailsAccordion}
        </div>
    );
}

export default ServiceDetails;
