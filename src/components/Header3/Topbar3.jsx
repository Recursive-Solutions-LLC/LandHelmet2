import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';

function Topbar3() {
    const iconStyle = {
        fontSize: '16px',
        color: 'white',
        marginTop: '-5px',
        marginRight: '5px',
    };

    const contactData = [
        { Icon: AiOutlineMail, text: 'info@landhelmets.com' },
        { Icon: AiOutlinePhone, text: '+1 (657) 319-5842' },
        { Icon: FaMapMarkerAlt, text: '6101 Ball Rd #201, Cypress, CA 90630' },
    ];

    const socialLinks = [
        { Icon: FaGoogle, url: 'https://maps.app.goo.gl/RP5YftAwkf4wGeNk6' },
        { Icon: FaInstagram, url: 'https://www.instagram.com/landhelmetsca/' },
        { Icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/landhelmets/' },
    ];

    return (
        <div className="top-bar style-3 d-none d-sm-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 col-12">
                        <div className="contact-data">
                            <ul>
                                {contactData.map(({ Icon, text }) => (
                                    <li key={text}>
                                        <Icon style={iconStyle} /> {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 pl-lg-0 col-12 justify-content-between justify-content-lg-end d-flex align-items-center">
                        <div className="social_link mr-20">
                            {socialLinks.map(({ Icon, url }) => (
                                <a key={url} href={url}>
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar3;
