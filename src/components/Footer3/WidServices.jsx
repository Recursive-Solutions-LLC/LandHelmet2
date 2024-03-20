import React from 'react';
import { Link } from 'react-router-dom';

function WidServices() {
    return (
        <div className="single-footer-wid">
            <div className="wid-title">
                <h4>Services</h4>
            </div>
            <ul>
                <li>
                    <Link to="/services">Quality Control</Link>
                </li>
                <li>
                    <Link to="/services">R&D</Link>
                </li>
                <li>
                    <Link to="/services">Global Distributor</Link>
                </li>
                <li>
                    <Link to="/services">In House Production</Link>
                </li>
            </ul>
        </div>
    );
}

export default WidServices;
