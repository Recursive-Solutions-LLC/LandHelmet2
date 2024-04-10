import React from 'react';
import ApprochCard from './ApprochCard';



function Approch(data) {

    const renderAproachCards = data.map((item) => (
        <ApprochCard
            key={item.id}
            thumbnail={item.thumb}
            icon={item.icon}
            heading={item.heading}
            text={item.text}
            btnText={item.btnText}
            pageLink={item.pageLink}
        />
    ))
    return (  <section className="our-approch-wrapper section-padding section-bg">
  <div className="container">
        <div className="row mb-30">
            <div className="col-12 col-lg-12">
                <div className="section-title text-center">
                    <h1>Why Choose Land Helmets</h1>
                </div>
            </div>
        </div>

        <div className="row">
            {renderAproachCards}
        </div>
    </div>
</section>
     
    );
}

export default Approch;
