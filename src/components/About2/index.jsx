import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import capabilitiesData from "../../content/capabilitiesData";

function About2() {
    return (
        <section className="about-wrapper  pb-0">
            <div className="container">
                <div className="row align-center">
                    <div className="col-lg-4 col-12 d-none d-lg-block">
                        <div className="promo-img">
                            <img src={capabilitiesData.img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 pl-xl-5 col-12">
                        <div className="block-contents ml-40">
                            <span>About Our Company</span>
                            <h1>{capabilitiesData.heading}</h1>
                            <h4>
                                {capabilitiesData.quote}
                                <span>
                                    <b>{capabilitiesData.author}</b> {capabilitiesData.position}
                                </span>
                            </h4>
                            <p>{capabilitiesData.text}</p>
                            <Link to="/contact" className="theme-btn theme-2 mb-30 mb-lg-0 white">
                                Get In Touch <BsArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About2;
