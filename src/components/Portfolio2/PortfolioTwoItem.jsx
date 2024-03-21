import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function PortfolioTwoItem({ name, cost, heading, img }) {
    return (
        <div className="single-project-item constructions medical" >
            <div className="project-thumb bg-cover" style={{ backgroundImage: `url(${img})` }} />
            <div className="project-details">
                <Link to={cost} className="icon">
                    <BsArrowRight />
                </Link>
              
                <h3>
                    <Link to={cost}>{heading}</Link>
                </h3>
                <div className="meta">
                    <span>{name}</span> 
                </div>
            </div>
        </div>
    );
}

export default PortfolioTwoItem;
