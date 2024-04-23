import React from 'react';

function InfoCard({content}) {

    const {  title, subtitle, cover, title2, text} = content;
    return (
        <div className="single-service-box bg-cover" style={{ backgroundImage: `url(${cover})` }}>
            <div className="service-title">
                <div>
                <h1>{title}</h1>
                <h3>{subtitle}</h3></div>
             
            </div>
            <div className="hover-flip-content text-left">
                <div className="icon">
                   
                </div>
                <h2>{title2}</h2>
          
                <p>{text}</p>
            </div>
        </div>
    );
}

export default InfoCard;
