import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioOneSlide({ image, left, title, desc, btnText }) {
    return (
        <div className="single-project">
            <div className="project-contents">
                <div className="row">
                    <div
                        className={`project-details col-lg-4 offset-lg-1 pl-lg-0 ${left ? 'order-2 order-lg-1' : 'order-1 order-lg-2'} col-12`}
                    >
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <Link to="/team" className="read-btn theme-btn">
                            {btnText}
                        </Link>
                    </div>
                    <div
                        className={`project-thumbnail col-lg-5 offset-lg-1 p-lg-0 ${left ? 'order-1 order-lg-2' : 'order-2 order-lg-1'} col-12`}
                    >
                        <a
                            href="/"
                            className="popup-gallery bg-cover"
                            style={{ backgroundImage: `url(${image})` }}
                        >
                            {null}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioOneSlide;
