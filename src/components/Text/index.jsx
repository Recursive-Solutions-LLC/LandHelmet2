import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import capabilitiesData from "../../content/capabilitiesData";

function About2() {
    return (
        <section className="about-wrapper pt-5 pb-0">
            <div className="container">
                <div className="row align-center">
                 
                    <div className=" col-12">
                        <div className="block-contents ml-40">
                           
                            <h1>Investment For YOUR Future</h1>
                          
                            <h4>We understand that the safety market is constantly changing  and evolving, that maintaining a competitive edge both within the industry and supporting our customers effectiveness requires significant investment in expanding capabilities, resources and research and development activities. We have a clear and focused research, development and investment strategy based on a blend of qualities such as ambition, drive and commitment as well as more tangible assets such as specialist engineering skills, maximising modern and emerging technologies, rapid development through simulation techniques, electronics expertise and a ruthless quest for performance and reliability in our products.<strong>Turn your vision into premium protection. </strong>  </h4>
                            <Link to="/contact" className="theme-btn theme-1 mb-30 mb-lg-0 white">
                            Contact our Experts <BsArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About2;
