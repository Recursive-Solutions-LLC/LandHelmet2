import React from 'react';

import Portfolio1 from './Portfolio1';
import Faq2 from './Faq2';
import portfolioOneData from './Portfolio1/porfolioOneData';
import VideoFeatrued from './VideoFeatured';
import Services1 from '../../components/Services1'
import ModelsTypeI from '../../content/ModelsTypeI';
function ProductDetails(data) {

    const { type } = data.type;
    const { brand } = portfolioOneData.filter(element => element.productType === type)[0];

    return (
        <section className="project-details-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <Services1 hasTitle={false} data={ModelsTypeI} title="Our Models"/>
                        <Portfolio1 type={type} />
                        <Faq2 type={type} />
                        <section className="portfolio-section section-padding pt-0">
                            <h3 className='text-center'>{brand.title}</h3>
                            <p>{brand.text}</p>
                        </section>
                        <VideoFeatrued index={type}  />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;