import React from 'react';
import { CgChevronDown, CgChevronLeft } from 'react-icons/cg';

const menuData = [
    {
        title: 'Home',
        path: '/',
    },

    {
        title: 'About us',
        path: '/about',
    },

    {
        title: 'Product',
        path: '/products',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            { path: '/model-m10', title: 'Safety Helmet M10' },
            { path: '/model-m12', title: 'Safety Helmet M12' },
            { path: '/model-m02', title: 'Safety Helmet M02' },
        ],
    },
    {
        title: 'Capabilities',
        path: '/capabilities',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,
        subNav: [
    
            { path: '/in-house-rd', title: 'In-House R&D' },
            { path: '/one-stop-manufacturing', title: 'One stop manufacturing' }
        ]},

    {
        title: 'Contact',
        path: '/contact',
    },
];

export default menuData;
