import React from 'react';

import Portfolio1 from './Portfolio1';
import Faq2 from './Faq2';

function PortfolioDetails(data) {
    const { type } = data.type;
    return (
        <section className="project-details-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <Portfolio1 type={type} />
                        <Faq2 type={type} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioDetails;