import React from 'react';

function ProductAccesoriesCard({ image, title }) {
    return (
        <div className="col-md-4 col-xl-3 col-12">
            <div className="single-service-card">
                <div
                    className="card-thumb bg-cover"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                />
                <div className="content">
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    );
}

export default ProductAccesoriesCard;