import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function FilterItem({ image, name, price, heading }) {
    return (
        <div className="col-xl-4 col-md-6 grid-item bedroom">
            <div className="single-cause-item">
                <div className="cause-bg bg-cover" style={{ backgroundImage: `url(${image})` }}>
                    <Link to="/services" className="icon">
                        <BsArrowRight />
                    </Link>
                </div>
                <div className="cause-content">
                
                    <h4>
                        <Link to="/services">{heading}</Link>
                    </h4>
                    <div className="cause-meta d-flex">
                        <div className="author ">{name}</div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterItem;
