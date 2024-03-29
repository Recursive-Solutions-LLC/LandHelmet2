import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MenuContent = () => (
    <div className="mobile-menu-bottom">
        <ul>
            <li className="bottom-item">
                <AiOutlineMail className="icon" />
                info@landhelmets.com
            </li>
            <li className="bottom-item">
                <AiOutlinePhone className="icon" />
                +1 (714) 723-0340
            </li>
        </ul>
        <div className="bottom-btn">
            <Link to="/contact" className="d-btn theme-btn d-block text-white">
                Contact Us
            </Link>
        </div>
    </div>
);

export default MenuContent;
