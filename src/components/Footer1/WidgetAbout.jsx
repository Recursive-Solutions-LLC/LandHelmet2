import React from 'react';
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';

function WidgetAbout({ text, fbLink, twitterLink, instaLink, youtubeLink }) {
    return (
        <>
            <div className="col-md-6 col-xl-3 col-12">
                <div className="single-footer-wid">
                    <div className="wid-title">
                        <h4>About Us</h4>
                    </div>
                    <p>{text}</p>
                    <div className="social_link">
                        <a href={fbLink}>
                            <FaGoogle />
                        </a>
                        <a href={twitterLink}>
                            <FaLinkedin />
                        </a>
                        <a href={instaLink}>
                            <FaInstagram />
                        </a>
                      
                    </div>
                </div>
            </div>
        </>
    );
}

export default WidgetAbout;
