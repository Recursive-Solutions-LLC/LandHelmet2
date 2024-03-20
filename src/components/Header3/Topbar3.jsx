import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedinIn, FaMap, FaMapMarkerAlt } from 'react-icons/fa';

function Topbar3() {
    return (
        <div className="top-bar style-3 d-none d-sm-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 col-12">
                        <div className="contact-data">
                            <ul>
                                <li>
                                    <AiOutlineMail
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginTop: '-5px',
                                            marginRight: '5px',
                                        }}
                                    />{' '}
                                    info@landhelmets.com
                                </li>
                                <li>
                                    <AiOutlinePhone
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginTop: '-5px',
                                            marginRight: '5px',
                                        }}
                                    />{' '}
                                    +1 (657) 319-5842
                                </li>
                                <li>
                                    <FaMapMarkerAlt
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginTop: '-5px',
                                            marginRight: '5px',
                                        }}
                                    />{' '}
                                    6101 Ball Rd #201, Cypress, CA 90630
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 pl-lg-0 col-12 justify-content-between justify-content-lg-end d-flex align-items-center">
                        <div className="social_link mr-20">
                            <a href="https://maps.app.goo.gl/RP5YftAwkf4wGeNk6">
                                <FaGoogle />
                            </a>
                            <a href="https://www.instagram.com/landhelmetsca/">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/company/landhelmets/">
                                <FaLinkedinIn />
                            </a>
                         
                       
                        </div>

                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar3;
