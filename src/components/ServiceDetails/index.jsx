import React from 'react';
import FaqAccordion from '../FaqAccordion';
import DetailsCarousel from './DetailsCarousel';
import DetailsContent from './DetailsContent';

function ServiceDetails({type}) {
    return (
        <div className="service-details-content-wrapper pl-0 pl-md-4">
            <DetailsCarousel  type={type}/>
            <DetailsContent  type={type}/>
            <div className="faq-content pl-0 pl-md-4">
                <h2>What Is Include?</h2>
                <FaqAccordion
                    question="Rigorous Testing for Uncompromised Safety"
                    answer="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi.
                        "
                />
                <FaqAccordion
                    question="Accurate Testing Processes."
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                />
                <FaqAccordion
                    question="35+ Years Of Experience."
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                />
            </div>
        </div>
    );
}

export default ServiceDetails;
