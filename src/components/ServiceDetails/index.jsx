import React from 'react';
import FaqAccordion from '../FaqAccordion';
import DetailsCarousel from './DetailsCarousel';
import DetailsContent from './DetailsContent';
import PagesContent from './PagesContent';

function ServiceDetails({ type }) {
    const page = PagesContent[parseInt(type) - 1]
    return (
        <div className="service-details-content-wrapper pl-0 pl-md-4">
            <DetailsCarousel type={type} />
            <DetailsContent type={type} />
            {page.map((element, index) => (
                <div key={index}>
                    {element.type == 'title+text+list' && (
                        <>
                            <div className="faq-content pl-0 pl-md-4">
                                <h2>{element.elements.title}</h2>
                                <p>{element.elements.text}</p>
                                {element.elements.list.map((listElement, listIndex) => (
                                    <FaqAccordion
                                        key={listIndex}
                                        question={listElement.title}
                                        answer={listElement.text}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ServiceDetails;
