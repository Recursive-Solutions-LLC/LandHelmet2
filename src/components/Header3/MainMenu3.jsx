import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo2.svg';
import MobileMenu from '../MobileMenu';

const menuItems = [
    { to: '/home-3', label: 'Home' },
    { to: '/about', label: 'About' },
    {
        to: '/products', label: 'Product', subMenu: [
            { to: '/team', label: 'team' },
            { to: '/faq', label: 'faq' },
            { to: '/product-details-1', label: 'product type 1' },
            { to: '/product-details-2', label: 'product type 2' },
        ]
    },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
];

function MainMenu3() {
    return (
        <header className="header-wrap header-3">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-2 col-5 col-md-4">
                        <div className="logo">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-lg-3 header-none">
                        <nav className="main-menu">
                            <ul>
                                {menuItems.map((item) => (
                                    <li key={item.to}>
                                        <Link to={item.to}>{item.label}</Link>
                                        {item.subMenu && (
                                            <ul className="sub-menu">
                                                {item.subMenu.map((subItem) => (
                                                    <li key={subItem.to}><Link to={subItem.to}>{subItem.label}</Link></li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-4 col-xl-3 col-6 col-md-5 text-right  align-items-center">
                        <Link to="/contact" className="theme-btn theme-3">Get A Quote</Link>
                        <div className="mobile-menu-bar">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainMenu3;
