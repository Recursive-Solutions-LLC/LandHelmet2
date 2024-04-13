import React from 'react';

const ProductDisplay = ({ title, details, mainImage, sides, detailsTitle }) => {


  const renderSides = sides.map((img, index) => (
    <div key={index} className="col-6 col-sm-3">
      <img src={img} alt={`Product view ${index + 1}`} className="img-fluid" />
    </div>
  ))


  const renderDetails = details.map((detail, index) => {
    return (
      <div key={index}>
        <h5>{detail.title}</h5>
        {detail.content.map((text) =>
          <p>{text}</p>
        )}
      </div>
    )
  })

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={mainImage} alt="Main Product" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{title}</h2>
          <div>
            <h3>{detailsTitle}</h3>
            {renderDetails}
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {renderSides}
      </div>
    </div>
  );
};

export default ProductDisplay;
