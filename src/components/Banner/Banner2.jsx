import React from 'react';

function Banner2({ title, subtitle }) {
    return (
        <div className="row pt-5">
            <div className="col-12 text-center align-self-center">
                <div className="section-banner-2">
                    <h1 className="mb-4">{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
            </div>
        </div>
    );
}

export default Banner2;
