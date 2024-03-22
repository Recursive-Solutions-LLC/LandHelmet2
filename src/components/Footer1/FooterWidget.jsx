import React from 'react';
import { Link } from 'react-router-dom';

function FooterWidget({ title, links }) {

    const renderList = links.map((link, index) => (
        <li key={index}>
            <Link to={link.path}>{link.label}</Link>
        </li>
    ))
    
    return (
   
        
            <div className="splite-menu  justify-content-between">
                <ul>
                    {renderList}
                </ul>
            </div>
    
    );
}

export default FooterWidget;
