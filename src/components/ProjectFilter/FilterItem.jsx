import React from 'react';
import { Link } from 'react-router-dom';

function FilterItem({ image, text, heading, link, callToAction }) {
    return (
        <div className="col-xl-4 col-md-6 grid-item bedroom">
            <div className="single-cause-item">
                <div className="cause-bg bg-cover" style={{ backgroundImage: `url(${image})` }}>
        
                </div>
                <div className="cause-content">
                
                    <h4 className="d-flex mb-4">
                        <Link to={link}>{heading}</Link>
                    </h4>
                    <div className="cause-meta d-flex">
                        <div className="author ">{text}</div>
               
                    </div>
                    <div className="callToAction d-flex mt-4">
                        <Link  to={link} className="icon">
                            {callToAction}
                        </Link>
                    </div>
          
                </div>
            </div>
        </div>
    );
}

export default FilterItem;
