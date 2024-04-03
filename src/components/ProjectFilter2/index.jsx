import React from 'react';
import FilterItem from '../ProjectFilter/FilterItem';

function ProjectFilter2({image, items}) {
    const renderItems = items.map((item=>{
        return(        <FilterItem
            callToAction={item.callToAction}
            link={item.link}
            key={item.id}
            image={item.image}
            text={item.text}
            heading={item.heading}
        />)
    }))

    return (
        <section className="portfolio-wrapper-section section-padding">
            <div className="container">

                <div className="d-flex justify-content-around grid text-center mt-5" >
                 {renderItems}
                </div>
            </div>
        </section>
    );
}

export default ProjectFilter2;
