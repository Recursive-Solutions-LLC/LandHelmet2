import { v4 as uuidv4 } from 'uuid';
import M10 from '../assets/img/about/type-II/model-10/m10.jpg';
import typeII from '../assets/img/icon/helmet-types/typeII.svg';
import thumb1 from '../assets/img/products/why_us.png';
import typeIIPic from '../assets/img/products/type-II/type-II.jpg';
import customization from  "../assets/img/products/type-II/customization.png"
import FlagRow from '../components/IconRow/FlagsRow';
import ColorsRow from '../components/IconRow/ColorsRow';

import { GiMountainClimbing } from "react-icons/gi";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { FaPersonFalling } from "react-icons/fa6";
import { FaTree } from "react-icons/fa";
import typeII_keys from "../assets/img/products/type-II/typeII_key.png"


import m02_front from "../assets/img/helmet-sides/m02/front.jpg"
import m02_down from "../assets/img/helmet-sides/m02/down.jpg"
import m02_left from "../assets/img/helmet-sides/m02/left.jpg"
import m02_right from "../assets/img/helmet-sides/m02/right.jpg"

const ModelsTypeI = [
    {
        id: uuidv4(),
        bgImg: M10,
        icon: typeII,
        heading: 'M10',
        btnText: 'Contact Us',
    },
];

export const productTypeIIData =
{
    section1: {
        id: uuidv4(),
        image: typeIIPic,
        flags: <FlagRow />,
        heading: 'Type II Helmet: Ultimate Protection for Industrial Excellence',
        desc: 'Land helmet is excited to present our Type II Helmet, specifically engineered to meet the rigorous safety standards required in industrial settings. This helmet combines cutting-edge design with top-grade materials to offer unparalleled protection, comfort, and durability.',
       btnText: 'Learn More',
        imgLink: 'https://drive.google.com/file/d/1WW2JLRtFkEo2M7TQbwxWi1ARE8Tfzn6-/view',
        model: "m10"
    },
    section2: {
        id: uuidv4(),
        image: customization,
        flags: <ColorsRow />,
        imgLink: '/contact',
        heading: 'Customization for your Brand',
        desc: 'Customize your Helmet with our logos, reflective stickers, and packaging. Our in-house customization services allow you to brand your helmets, making them not just a piece of safety equipment, but also a part of your company identity',
        btnText: 'Get In touch with an expert',
        model: ""
    },
    keyFeatures: {

        image: typeII_keys ,
        keys:[
            {
                title: 'Certifications for Confidence',
                description: 'Certified to meet ANSI Z89.1-2014 (R2019) standards, our Type II helmet ensures compliance with stringent safety requirements, making it suitable for a wide range of industries including construction, mining, and utility work.'
            },
            {
                title: 'Advanced Materials for Protection',
                description: 'Featuring an ABS Advanced Thermo Material Shell and high-density EPS polystyrene interior, our helmets offer superior impact resistance and energy absorption.'
            },
            {
                title: 'Lightweight and Comfortable',
                description: 'Weighing just 510g, the helmet is designed for all-day comfort, reducing wearer fatigue without compromising on safety.'
            },
            {
                title: 'Versatile Use',
                description: 'Equiped with features like lamp clips, earmuffs slots , and an adjustable ratchet system, the Type II helmet is adaptable to various job requirements and conditions.'
            },
            {
                title: 'Extended Lifespan',
                description: 'Built to last, our helmet boasts a 10-year lifespan, offering long-term reliability and safety.'
            }
        ]
    },
    brand: {
        title: 'Customization for Your Brand',
        text: 'Customize your helmets with logos, reflective stickers, and packaging. Our in-house customization services allow you to brand your helmets, making them not just a piece of safety equipment, but also a part of your company\'s identity.'
    },
    applications: {
        title: 'Applications',
        text: 'Our Type II helmet is designed for a broad range of applications, ensuring safety across different sectors:',
        options: [
            { icon: GiMountainClimbing, title: 'Climbing', text: 'Conquer new heights with our cutting-edge climbing helmets.' },
            { icon: MdOutlineSportsKabaddi, title: 'Outdoor', text: 'Adventure awaits with our durable outdoor helmets.' },
            { icon: MdConstruction, title: 'Construction', text: 'Stay safe on the job site with our reliable construction helmets.' },
            { icon: FaPersonFalling, title: 'Fall Protection', text: 'Prevent accidents with our trusted fall protection helmets.' },
            { icon: FaTree, title: 'Arborist', text: 'Protect yourself while tending to trees with our specialized arborist helmets.' }
        ]
    },
    whyToChoose: {
        title: 'Why Choose Land Helmets?',
        text: 'With Land Helmets, you\'re not just purchasing safety equipment; you\'re investing in a partnership that prioritizes your team\'s safety and your brand\'s visibility. Contact us today to learn more about our Type II helmets and how we can assist with your safety needs.',
        image: thumb1
    }


    
}

export const Model10Sides = [
    m02_front,
    m02_left,
    m02_down,
    m02_right
]



export default ModelsTypeI;