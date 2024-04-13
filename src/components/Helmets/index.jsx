import React, { useState } from "react";

function HelmetItem({ helmet, onHover }) {
  return (
    <div className="col-12 col-md-3 mb-3" onMouseEnter={() => onHover(helmet.img)}>
      <div className="man-img">
        <img src={helmet.img} alt="helmet" />
      </div>
      <h3>{helmet.heading}</h3>
    </div>
  );
}

function Helmets({ cover, variants, type }) {
  const [currentImage, setCurrentImage] = useState(cover.img);

  const renderVariants = variants.map((helmet, index) => (
      <HelmetItem key={index} helmet={helmet} onHover={setCurrentImage} />
    ));

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 order-md-1">
            <div className="row text-center">
              <div className="section-title-3">
                <h1>Colors</h1>
              </div>
              <div className="row">
                {renderVariants}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 order-md-2">
            <div className="row pt-5 justify-content-center">
              <div className="col-12">
                <div className="man-img">
                  <img className="big-image" src={currentImage} alt="helmet" />
                </div>
                <h3>AU-{type}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Helmets;
