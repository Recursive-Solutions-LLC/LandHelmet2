import { v4 as uuidv4 } from 'uuid';
import Model12 from '../assets/img/about-us/type-I/model-12/m12.png';
import Model02 from '../assets/img/about-us/type-I/model-02/m02.jpg';
import typeI from '../assets/img/icon/helmet-types/typeI.svg';
import thumb1 from '../assets/img/home3/service1.jpg';
import typeIPic from '../assets/img/products/type-I/type-I.jpg';


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
        image: typeIPic,
        imgLink: '/',
        heading: 'Type I Helmet: Ultimate Protection for Industrial Excellence',
        desc: 'Land helmet is excited to present our Type I Helmet, specifically engineered to meet the rigorous safety standards required in industrial settings. This helmet combines cutting-edge design with top-grade materials to offer unparalleled protection, comfort, and durability.',
        btnText: 'Case Details',
    },

    section2: {
        id: uuidv4(),
        image: typeIPic,
        imgLink: '/contact',
        heading: 'Customization for your Brand',
        desc: 'Customize your Helmet with our logos, reflective stickers, and packaging. Our in-house customization services allow you to brand your helmets, making them not just a piece of safety equipment, but also a part of your company identity',
        btnText: 'Get In touch with an expert',
    },

    keyFeatures: [
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
    ],
    brand: {
        title: 'Customization for Your Brand',
        text: 'Customize your helmets with logos, reflective stickers, and packaging. Our in-house customization services allow you to brand your helmets, making them not just a piece of safety equipment, but also a part of your company\'s identity.'
    },
    applications: {
        title: 'Ideal for Diverse Industries',
        text: 'The Type I helmet is perfectly suited for a wide array of industries where safety and head protection are paramount:',
        options: [
            { title: 'Climbing', text: 'Conquer new heights with our cutting-edge climbing helmets.' },
            { title: 'Outdoor', text: 'Adventure awaits with our durable outdoor helmets.' },
            { title: 'Construction', text: 'Stay safe on the job site with our reliable construction helmets.' },
            { title: 'Fall Protection', text: 'Prevent accidents with our trusted fall protection helmets.' },
            { title: 'Arborist', text: 'Protect yourself while tending to trees with our specialized arborist helmets.' }
        ]
    },
    whyToChoose: {
        title: 'Why Choose Land Helmets?',
        text: 'Choosing Land Helmets means selecting a partner dedicated to providing top-tier safety solutions. Our Type I helmets embody our commitment to protection, comfort, and innovation. Reach out to us to discover more about our products and how they can enhance safety on your job sites.',
        image: thumb1
    }
}
    ;



export default ModelsTypeI;