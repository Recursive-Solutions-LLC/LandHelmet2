import React from 'react';
import ApprochCard from './ApprochCard';
import approchData from './approchData';
import approchDataHome from './approchDataHome';

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
const renderAproachCards2 = approchDataHome.map((data) => (
    <ApprochCard
        key={data.id}
        thumbnail={data.thumb}
    
        heading={data.heading}
        text={data.text}
        btnText={data.btnText}
        pageLink={data.pageLink}
    />
))
function Approch(data) {
    return (  <section className="our-approch-wrapper section-padding section-bg">
  {data.type===1 && <div className="container">
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
    </div>}  
    {data.type===2 && <div className="container">
        <div className="row mb-30">
            <div className="col-12 col-lg-12">
                <div className="section-title text-center">
                    <h1>Unlock The Full Potential Of Your Product</h1>
                    <h2> and Bring Your Vision To Life with US</h2>
                </div>
            </div>
        </div>

        <div className="row">
            {renderAproachCards2}
        </div>
    </div>}  
</section>
     
    );
}

export default Approch;
