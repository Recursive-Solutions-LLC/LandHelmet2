import React from 'react';

function InfoCard({ content }) {
    const { image, title, index, text, subtitle } = content;

    const renderTitle = title && <h1>{title}</h1>


    return (
        <div className="single-service-box bg-cover" style={{ backgroundImage: `url(${image})` }}>
            <div className="service-title">
                <div>
                    {renderTitle}
                    <h3>{subtitle}</h3>
                </div>

            </div>
            <div className="hover-flip-content text-left">
                <div className="icon">
                    <h1>{index}</h1>
                </div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default InfoCard;
