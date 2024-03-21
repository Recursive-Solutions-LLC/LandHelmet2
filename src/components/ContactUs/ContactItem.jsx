import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ContactItem({ icon, heading, text, item1, item2, action }) {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card card1">
                <div className="top-part">
                    <div className="icon">{icon}</div>
                    <div className="title">
                        <h4>{heading}</h4>
                        <span>{text}</span>
                    </div>
                </div>
                <div className="bottom-part relative">
                    <div className="info">
                        <p>{item1}</p>
                        {item2 && (<p>{item2}</p>)}
                    </div>
                    <a href={action} target="_blank">
                        <div className="icon">
                            <BsArrowRight/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactItem;
