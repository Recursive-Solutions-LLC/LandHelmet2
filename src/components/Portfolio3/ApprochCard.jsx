import React from 'react';
import { Link } from 'react-router-dom';

function ApprochCard({ thumbnail, icon, heading, text, btnText, pageLink }) {
    return (
        <>
            <div className="col-md-6 col-xl-4 col-12">
                <div className="single-approch-card">

                    <div className="faq-left-img">
                        <div className="man-img">
                            <img src={thumbnail} alt="man" />
                        </div>
                    </div>
                    <div className="content2 text-center white">

                        <h1>
                            <Link to={pageLink}>{heading}</Link>
                        </h1>
                        <h3>{text}</h3>
                        <div className='row'>
                            <div className='col-6'>
                                <Link to={pageLink} className="theme-btn theme-4 mb-30 mb-lg-0 ">
                                    Learn More
                                </Link>
                            </div>
                            <div className='col-6'>
                               { icon}
                            </div></div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ApprochCard;
