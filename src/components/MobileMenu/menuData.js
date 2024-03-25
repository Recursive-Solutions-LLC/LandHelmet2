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
        path: '',

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
        title: 'Services',
        path: '',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,
        subNav: [
    
            { path: '/services-details-quality', title: 'Quality Control' },
            { path: '/services-details-rd', title: 'R&D' },
            { path: '/services-details-distributor', title: 'Global Distributor' },
            { path: '/services-details-production', title: 'In House Production' },
        ]},

    {
        title: 'Contact',
        path: '/contact',
    },
];

export default menuData;
