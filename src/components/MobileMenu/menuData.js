import React from 'react';
import { CgChevronDown, CgChevronLeft } from 'react-icons/cg';

const menuData = [
    {
        title: 'Home',
        path: '/',
    },

    {
        title: 'About',
        path: '/about',
    },

    {
        title: 'Product',
        path: '/products',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
         
            {
                title: 'Helmet Type I ',
                path: '/type-I',
                cName: 'sub-nav',
            },
            {
                title: 'Helmet Tpe II',
                path: '/type-II',
            },
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
