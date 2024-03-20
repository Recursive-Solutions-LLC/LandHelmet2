import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo2.svg';
import MobileMenu from '../MobileMenu';

function MainMenu3() {
    return (
        <header className="header-wrap header-3">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-2 col-5 col-md-4">
                        <div className="logo">
                            <Link to="/home-3">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-lg-3 header-none">
                        <div className="main-menu">
                            <ul>
                                <li>
                                    <Link to="/home-3">Home</Link>
                                    
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/products">Product</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/team">team</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq">faq</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-details-1">product 1</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-details-2">product 2</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                               
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-xl-3 col-6 col-md-5 text-right d-in-flex align-items-center">
                        <Link to="/contact" className=" theme-btn theme-3">
                            Get A Quote
                        </Link>

                        <div className="col mobile-menu-bar">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainMenu3;
