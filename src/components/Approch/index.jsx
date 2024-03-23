import React from 'react';
import ApprochCard from './ApprochCard';
import approchData from './approchData';

const renderAproachCards = approchData.map((data) => (
    <ApprochCard
        key={data.id}
        thumbnail={data.thumb}
        icon={data.icon}
        heading={data.heading}
        text={data.text}
        btnText={data.btnText}
        pageLink={data.pageLink}
    />
))

function Approch() {
    return (
        <section className="our-approch-wrapper section-padding section-bg">
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
