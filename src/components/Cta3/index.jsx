import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import bgImg from '../../assets/img/subscribe_bg.jpg';

function Cta3() {
    return (
        <section className="cta-wrapper">
            <div className="container">
                <div
                    className="cta-content cta-style-2 bg-cover"
                    style={{ backgroundImage: `url(${bgImg})` }}
                >
                    <div className="row align-items-center text-center text-lg-left justify-content-center">
                        <div className="col-lg-7">
                            <h1>Get an easy quotation for your industry</h1>
                        </div>
                        <div className="col-lg-4 pl-lg-0 mt-4 mt-lg-0">
                            <div className="contact-info">
                                <div  className="icon">
                                    <AiOutlinePhone  style={{ color: '#80BB2A' }} />
                                </div>
                                <div className="contact-number">
                                    <a href="tel:+1(657)319-5842">+1 (657) 319-5842</a>
                                    <span>Call Us Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta3;
