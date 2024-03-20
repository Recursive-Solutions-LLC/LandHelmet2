import React from 'react';
import { Link } from 'react-router-dom';

function WidExplore() {
    return (
        <div className="single-footer-wid">
            <div className="wid-title">
                <h4>Explore Other Pages</h4>
            </div>
            <div className="splite-menu d-flex justify-content-between">
                <ul>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/">R&D</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default WidExplore;
