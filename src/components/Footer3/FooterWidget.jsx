import React from 'react';
import { Link } from 'react-router-dom';

function FooterWidget({ title, links }) {

    const renderList = links.map((link, index) => (
        <li key={index}>
            <Link to={link.path}>{link.label}</Link>
        </li>
    ))
    
    return (
        <div className="single-footer-wid">
            <div className="wid-title">
                <h4>{title}</h4>
            </div>
            <div className="splite-menu d-flex justify-content-between">
                <ul>
                    {renderList}
                </ul>
            </div>
        </div>
    );
}

export default FooterWidget;
