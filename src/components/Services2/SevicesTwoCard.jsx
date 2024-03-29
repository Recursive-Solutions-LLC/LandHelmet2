import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SevicesTwoCard({link, thumbnail, icon, heading, text }) {
    return (
        <div className="col-md-4 col-xl-3 col-12">
            <div className="single-service-card">
                <div
                    className="card-thumb bg-cover"
                    style={{
                        backgroundImage: `url(${thumbnail})`,
                    }}
                />
                <div className="content">
                    <div className="case-cat">
                        <Link to={ `/${link}`}>{icon}</Link>
                    </div>
                    <h3>
                        <Link to={ `/${link}`}>{heading}</Link>
                    </h3>
                    <p>{text}</p>
                    <Link to={ `/${link}`} className="read-btn">
                        Read More <BsArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SevicesTwoCard;
