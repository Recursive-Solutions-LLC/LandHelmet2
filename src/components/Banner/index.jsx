import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Banner({ title, subtitle, texts, image }) {
  const renderImage = image && (
    <img src={image.src} alt={image.alt} className="img-fluid" />
  );

  const renderSubtitle = subtitle &&<h4>{subtitle}</h4>
  const renderTexts = texts && texts.map((text)=><p className='mt-2' key={uuidv4()}>{text}</p>)
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
          <div className="section-title-6 mr-md-5 mb-5">
            <h1 className="mb-4">{title}</h1>
            {renderSubtitle}
            {renderTexts}
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
