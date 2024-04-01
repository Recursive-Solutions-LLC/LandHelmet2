import { v4 as uuidv4 } from 'uuid';
import Model12 from '../assets/img/about-us/type-I/model-12/m12.png';
import Model02 from '../assets/img/about-us/type-I/model-02/m02.jpg';
import typeI from '../assets/img/icon/helmet-types/typeI.svg';
import thumb1 from '../assets/img/products/why_us.png';
import typeIPic from '../assets/img/products/type-I/type-I.jpg';
import Model12Bg from "../assets/img/models/m12/m12.jpg";
import typeI_keys from "../assets/img/products/type-I/typeI_keys.png"

import { GiMountainClimbing } from "react-icons/gi";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { FaPersonFalling } from "react-icons/fa6";
import { FaTree } from "react-icons/fa";

import FlagRow from '../components/IconRow/FlagsRow';
import ColorsRow from '../components/IconRow/ColorsRow';

import m10_front from "../assets/img/helmet-sides/m10/front.jpg"
import m10_down from "../assets/img/helmet-sides/m10/down.jpg"
import m10_left from "../assets/img/helmet-sides/m10/left.jpg"
import m10_right from "../assets/img/helmet-sides/m10/right.jpg"

import m12_front from "../assets/img/helmet-sides/m12/front.jpg"
import m12_down from "../assets/img/helmet-sides/m12/down.jpg"
import m12_left from "../assets/img/helmet-sides/m12/left.jpg"
import m12_right from "../assets/img/helmet-sides/m12/right.jpg"

const ModelsTypeI = [
    {
        id: uuidv4(),
        bgImg: Model12,
        icon: typeI,
        heading: 'M12',
        btnText: 'Talk to an expert',
    },
    {
        id: uuidv4(),
        bgImg: Model02,
        icon: typeI,
        heading: 'M02',
        btnText: 'Talk to an expert',
    },
];



export const productTypeIData =
{
    section1: {
        id: uuidv4(),
        image: Model12Bg,
        flags: <FlagRow />,
        imgLink: 'https://drive.google.com/file/d/1llDh2ZGs2gqHvF_OutfZZ5Mqhv4h7BQe/view',
        heading: 'Type I Helmet: Ultimate Protection for Industrial Excellence',
        desc: 'Land helmet is excited to present our Type I Helmet, specifically engineered to meet the rigorous safety standards required in industrial settings. This helmet combines cutting-edge design with top-grade materials to offer unparalleled protection, comfort, and durability.',
        btnText: 'Learn more',
        model: "m12"
    },

    section2: {
        id: uuidv4(),
        image: typeIPic,
        flags: <ColorsRow />,
        imgLink: '/contact',
        heading: 'Customization for your Brand',
        desc: 'Customize your Helmet with our logos, reflective stickers, and packaging. Our in-house customization services allow you to brand your helmets, making them not just a piece of safety equipment, but also a part of your company identity',
        btnText: 'Get In touch with an expert',
        model: "m02"

    },

    keyFeatures: {
        image: typeI_keys,
        keys: [
                {
                    title: "Detachable Patent Adjustment in the features.",
                    description: "Ultra lightweight shell made with ABS material provides superior protection"
                },
                {
                    title: 'Unmatched Safety Standards',
                    description: 'Our type I helmets are ANSI Z89.1-2014 (R2019) certified, ensuring they meet the highest safety requirements for impact protection in the industry. Designed to safeguard against top impacts, these helmets are essential where vertical protection is critical.'
                },
                {
                    title: 'Durable Construccion',
                    description: 'Made with ABS Advanced Termo Material Shell and equipped with high-density EPS polystyrene for inner protection, our helmets are built to withstand harsh conditions while providing superiorimpact absorption.'
                },
                {
                    title: 'Comfort for All-Day Wear',
                    description: 'With a weight of just 430g and featuring an adjustable ratchet system, our Type I helmet offers a comfortable fit that can be tailored to any head size, ensuring comfort throughout the workday.'
                },
                {
                    title: 'Versatile Functionality',
                    description: 'The helmet includes features such as lamp clips for night work, slots for earmuffs, and a range of compatible visors, making it adaptable for a wide variety of job sites and tasks.'
                },
                {
                    title: 'Long-Term Investment',
                    description: 'Offering a 10-years lifespan, our Type I helmet represents a long-lasting solution to your safety needs, ensuring reliability and protection for years to come.'
                }
            ]

    },
    brand: {
        title: 'Customization for Your Brand',
        text: 'Customize your helmets with logos, reflective stickers, and packaging. Our in-house customization services allow you to brand your helmets, making them not just a piece of safety equipment, but also a part of your company\'s identity.'
    },
    applications: {
        title: 'Ideal for Diverse Industries',
        text: 'The Type I helmet is perfectly suited for a wide array of industries where safety and head protection are paramount:',
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
        text: 'Choosing Land Helmets means selecting a partner dedicated to providing top-tier safety solutions. Our Type I helmets embody our commitment to protection, comfort, and innovation. Reach out to us to discover more about our products and how they can enhance safety on your job sites.',
        image: thumb1
    }
};

export const Model02Sides = [
    m10_front,
    m10_left,
    m10_down,
    m10_right
]

export const Model12Sides = [
    m12_front,
    m12_left,
    m12_down,
    m12_right
]



export default ModelsTypeI;