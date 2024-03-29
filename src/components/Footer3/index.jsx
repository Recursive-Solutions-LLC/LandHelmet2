import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import iconCall from '../../assets/img/icon/call-icon.png';
import iconMap from '../../assets/img/icon/map-icon.png';
import logo from '../../assets/img/logo2.svg';
import FooterWidget from './FooterWidget';
// import WidNewsletter from './WidNewsletter';
import WidQuestions from './WidQuestions';

function Footer3() {



    const exploreLinks = [
        { path: "/services", label: "Services" },
        { path: "/about", label: "About us" },
        { path: "/", label: "R&D" },
        { path: "/contact", label: "Contact us" },
    ];
    const serviceLinks = [
        { path: "/services", label: "Quality Control" },
        { path: "/services", label: "R&D" },
        { path: "/services", label: "Global Distributor" },
        { path: "/services", label: "In House Production" },
    ];
    const productsLinks = [
        { path: "/", label: "Type I" },
        { path: "/", label: "Type II" },
     
    ];

    return (
        <footer className="footer-3 footer-wrap">
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-3 col-12 pr-90">
                           <FooterWidget title="Explore Other Pages" links={exploreLinks} />
                        </div>
                        <div className="col-md-6 col-xl-3 col-12 pr-xl-0">
                          <FooterWidget title="Services" links={serviceLinks} />
                        </div>
                        <div className="col-md-6 col-xl-3 col-12 pl-xl-5">
                            <div className="single-footer-wid ml-15 contact_widget_2">
                                <div className="wid-title">
                                    <h4>Have any Question?</h4>
                                </div>
                                <div className="contact-us">
                                    <WidQuestions
                                        icon={iconCall}
                                        title="Phone"
                                        text="+1 (714) 723-0340"
                                    />
                                    <WidQuestions
                                        icon={iconMap}
                                        title="Address"
                                        text="6101 Ball Rd #201, Cypress, CA 90630"
                                    />
                                    <WidQuestions
                                        icon={iconCall}
                                        title="Email"
                                        text="info@landhelmets.com"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 col-12  pl-xl-5 pl-90">
                        <FooterWidget title="Services" links={productsLinks} />

                            {/* <WidNewsletter /> */}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-12 order-2 order-md-1">
                            <div className="copyright-info mt-3 mt-md-0">
                                <p>
                                    &copy; Design By <Link to="https://recursivesolutions.net/">Recusrive Solutions</Link>{' '} - 2024
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 text-center order-1 order-md-2">
                            <div className="footer-logo">
                                <Link to="/">
                                    <img src={logo} alt="Dustrix" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 text-md-end order-3 order-md-3">
                            <div className="social_link  mt-3 mt-md-0">
                                <Link to="/">
                                    <FaFacebookF />
                                </Link>
                                <Link to="/">
                                    <FaTwitter />
                                </Link>
                                <Link to="/">
                                    <FaInstagram />
                                </Link>
                                <Link to="/">
                                    <FaYoutube />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>


        </footer>
    );
}

export default Footer3;
