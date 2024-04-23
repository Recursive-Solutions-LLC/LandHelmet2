import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function InfoCard3({content}) {
    const { text, link, title, cover } = content;
    return (
        <div className="single-project-item constructions medical" >
            <div className="project-thumb bg-cover" style={{ backgroundImage: `url(${cover})`  }} />
            <div className="project-details">
                <Link to={link} className="icon">
                    <BsArrowRight />
                </Link>              
                <h2>
                   {title}
                </h2>
                <div className="meta">
                    <p> <strong>{text}</strong></p> 
                </div>
            </div>
        </div>
    );
}

export default InfoCard3;