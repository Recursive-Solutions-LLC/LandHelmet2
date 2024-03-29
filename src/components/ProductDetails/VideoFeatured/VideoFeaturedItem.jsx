import React from 'react';
import { Link } from 'react-router-dom';

function VideoFeaturedItem({ Icon, heading, text }) {
    return (
        <div className="col-12 col-md-6">
            <div className="single-feature-item">
                <div className="icon">
                    <Icon className="icon-size" />
                </div>
                <div className="content">
                    <h3>
                        <Link to="/services-details">{heading}</Link>
                    </h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoFeaturedItem;
