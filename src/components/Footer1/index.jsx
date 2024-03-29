import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import WidgetAbout from './WidgetAbout';
import WidgetGetinTouch from './WidgetGetinTouch';
import WidgetGetinTouchData from './WidgetGetinTouchData';
import FooterWidget from './FooterWidget';
function Footer1() {
    // STATES
    const [email, setEmail] = useState('');

    // HANDLER
    const onchangeHandler = (e) => {
        setEmail(e.target.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };
    const exploreLinks = [
        { path: "/services", label: "Services" },
        { path: "/about", label: "About us" },
        { path: "/", label: "R&D" },
        { path: "/contact", label: "Contact us" },
    ];
    const serviceLinks = [
        { path: "/services-details-quality", label: "Quality Control" },
        { path: "/services-details-rd", label: "R&D" },
        { path: "/services-details-distributor", label: "Global Distributor" },
        { path: "/services-details-production", label: "In House Production" },
    ];
    return (
        <footer className="footer-1 footer-wrap">
            <div className="footer-widgets dark-bg">
                <div className="container">
                    <div className="row">
                        {/* ABOUT WIDGET */}
                        <WidgetAbout
                            text="Safety, Fashion and comfort combined
                            for your ultimate head protection."
                            fbLink="https://maps.app.goo.gl/RP5YftAwkf4wGeNk6"
                            twitterLink="https://www.linkedin.com/company/landhelmets/"
                            instaLink="https://www.instagram.com/landhelmetsca/"
                            youtubeLink="mailto:info@landhelmets.com"
                        />

                        {/* NEWS FEED WIDGET */}

                        <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid recent_post_widget">
                                <div className="wid-title">
                                    <h4>Services</h4>
                                </div>
                                <div className="col-md-6 col-xl-3 col-12 pr-xl-0">
                          <FooterWidget title="Services" links={serviceLinks} />
                        </div>
                            </div>
                        </div>

                        {/* NEWSLETTER WIDGET */}
                        <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid newsletter_widget">
                                <div className="wid-title">
                                    <h4>Newsletter</h4>
                                </div>
                                <div className="newsletter_box">
                                    <p>
                                        Subscribe our newsletter to get our latest updates &#38;
                                        news.
                                    </p>
                                    <form action="#">
                                        <input
                                            value={email}
                                            onChange={onchangeHandler}
                                            type="email"
                                            placeholder="Enter email address"
                                            required
                                        />
                                        <button
                                            className="submit-btn"
                                            type="submit"
                                            onSubmit={onSubmitHandler}
                                        >
                                            <FaPaperPlane />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid ml-15 site_info_widget">
                                <div className="wid-title">
                                    <h4>Get In Touch</h4>
                                </div>
                                <div className="contact-us" />
                                {WidgetGetinTouchData.map((data) => (
                                    <WidgetGetinTouch
                                        key={data.id}
                                        icon={data.icon}
                                        heading={data.heading}
                                        text={data.text}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                            {/* Footer bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            
                        </div>
                        <div className="col-lg-4 col-12 text-center">
                         
                            <div className="copyright-info">
                                <p>
                                    &copy; Design By <a href="recursivesolutions.net">Recursive Solutions </a> - 2024
                                </p>
                          
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block col-12">
                           
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </footer>
    );
}

export default Footer1;
