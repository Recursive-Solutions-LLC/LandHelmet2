import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo2.svg';
import MobileMenu from '../MobileMenu';

const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About'  , subMenu: [
    
        { to: '/services-details-quality', label: 'Quality Control' },
        { to: '/services-details-distributor', label: 'Global Distributor' },
    ]},
    {
        to: '/type-I', label: 'Product', subMenu: [
    
            { to: '/type-I', label: 'Helmet Type I' },
            { to: '/type-II', label: 'Helmet Type II' },
        ]
    },
    { to: '/services', label: 'Services' , subMenu: [
    
        { to: '/services-details-rd', label: 'R&D' },
        { to: '/services-details-production', label: 'In House Production' },
    ]},
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
                        <Link to="/contact" className="theme-btn theme-3">Contact Us</Link>
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
