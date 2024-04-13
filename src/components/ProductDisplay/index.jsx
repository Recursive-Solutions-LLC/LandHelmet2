import React from 'react';
import sei from "../../assets/img/products/display/sei.png"
import certifications from "../../assets/img/products/display/certifications.png"

const ProductDisplay = ({
  title,
  details,
  mainImage,
  sides,
  detailsTitle,
}) => {

  const renderSides = sides.map((img, index) => (
    <div key={index} className="col-6 col-sm-3">
      <img src={img} alt={`Product view ${index + 1}`} className="img-fluid" />
    </div>
  ));

  const renderDetails = details.map((detail, index) => (
    <div key={index}>
      <h5 className="subtitle-technical">{detail.title}</h5>
      {detail.content.map((text, textIndex) => (
        <p className="text-technical" key={textIndex}>{text}</p>
      ))}
    </div>
  ));

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={mainImage} alt="Main Product" className="img-fluid" />
          <div className="row justify-content-between mt-4">
            <div className="col-auto">
              <img src={sei} alt="Certification Left" className="img-fluid" style={{ maxWidth: '100px' }} />
            </div>
            <div className="col-auto">
              <img src={certifications} alt="Certification Right" className="img-fluid" style={{ maxWidth: '100px' }} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className='title-border-container'>
            <h1 className='mb-5'>{title}</h1>
          </div>
          <div>
            <h3 className="subtitle-technical">{detailsTitle}</h3>
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
