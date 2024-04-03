import React from 'react';
import FilterItem from '../ProjectFilter/FilterItem';

function ProjectFilter2({title, subtitle, image, items}) {
    const {src, alt} = image
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
            <div className="row">
                    <div className="col-12 col-md-6 text-md-left align-self-center">
                        <div className="section-title-3">
                            <h1 className="mb-4">{title}</h1>
                            <h4>{subtitle}</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-md-right">
                        <img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </div>
                <div className="d-flex justify-content-around grid text-center mt-5" >
                 {renderItems}
                </div>
            </div>
        </section>
    );
}

export default ProjectFilter2;
