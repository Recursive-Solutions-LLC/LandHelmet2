import React from 'react';

import Portfolio1 from './Portfolio1';
import Faq2 from './Faq2';
import VideoFeatrued from './VideoFeatured';
import Services1 from '../../components/Services1'
function ProductDetails({data, model}) {

    const { brand, section1, section2 } = data

    return (
        <section className="project-details-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <Services1 hasTitle={false} data={model} title="Our Models"/>
                        <Portfolio1 section={section1} />
                        <Portfolio1 section={section2}  left />
                        <Faq2 data={data} />
                        <section className="portfolio-section section-padding pt-0">
                            <h3 className='text-center'>{brand.title}</h3>
                            <p>{brand.text}</p>
                        </section>
                        <VideoFeatrued data={data}  />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;