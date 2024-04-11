import React from 'react';

function Banner({ title, subtitle, image }) {
  const renderImage = image && (
    <img src={image.src} alt={image.alt} className="img-fluid" />
  );

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
          <div className="section-title-3 mr-md-5 mb-5">
            <h1 className="mb-4">{title}</h1>
            <h4>{subtitle}</h4>
          </div>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-5 mb-md-0">
          {renderImage}
        </div>
      </div>
    </div>
  );
}

export default Banner;
