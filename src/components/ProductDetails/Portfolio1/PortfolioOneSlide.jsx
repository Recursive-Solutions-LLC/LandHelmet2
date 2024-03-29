import React from 'react';
import HelmetSides from "../../IconRow/HelmetSides"
function PortfolioOneSlide({ image, left, title, desc, btnText, imgLink, flags, model }) {
    
    console.log('%csrc/components/ProductDetails/Portfolio1/PortfolioOneSlide.jsx:5 model', 'color: white; background-color: #007acc;', model);
    return (
        <div className="single-project">
            <div className="project-contents">
                <div className="row">
                    <div
                        className={`project-details col-lg-4 offset-lg-1 pl-lg-0 ${left ? 'order-2 order-lg-1' : 'order-1 order-lg-2'} col-12`}
                    >
                        <h2 className='mb-5'>{title}</h2>
                        {flags}
                        <p>{desc}</p>
                        <a href={imgLink} className="read-btn theme-btn">
                            {btnText}
                        </a>
                    </div>
                    <div
                        className={`project-thumbnail py-4 col-lg-5 offset-lg-1 p-lg-0 ${left ? 'order-1 order-lg-2' : 'order-2 order-lg-1'} col-12`}
                    >
                        <div
                            className="popup-gallery bg-cover"
                            style={{ backgroundImage: `url(${image})` }}
                        />

                        <HelmetSides model={model}/>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default PortfolioOneSlide;
