import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/img/project/project1.jpg';

function PortfolioOneSlide({ image, category, link, client, title, desc, btnText}) {
    return (
        <div className="single-project">
            <div className="project-contents">
                <div className="row" style={{height:"100%"}}>
                    <div className="project-details col-lg-4 offset-lg-1 pl-lg-0 order-2 order-lg-1 col-12">
                        <div className="project-meta">
                            {category && (<a href="/" className="project-cat">
                                {category}
                            </a>)}
                            {client && (<div className="client-info d-inline">
                                <span>
                                    <AiOutlineUser /> Client:
                                </span>{' '}
                                {client}
                            </div>)}
                        </div>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        {btnText && (<Link to={link} className="read-btn theme-btn">
                            {btnText}
                        </Link>)}
                    </div>
                    <div className="project-thumbnail col-lg-5 offset-lg-1 p-lg-0 order-1 order-lg-2 col-12 " >
                        <div
                           
                            className="popup-gallery bg-cover w-full"
                            style={{ backgroundImage: `url(${image})` }}
                        >
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioOneSlide;
