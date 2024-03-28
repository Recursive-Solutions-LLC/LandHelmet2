import { v4 as uuidv4 } from 'uuid';
import M10 from '../assets/img/about-us/type-II/model-10/m10.jpg';
import typeII from '../assets/img/icon/helmet-types/typeII.svg';
import thumb1 from '../assets/img/home3/service1.jpg';
import typeIIPic from '../assets/img/products/type-II/type-II.jpg';



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
        category: 'Industrial',
        client: 'Rosalina D.',
        heading: 'Type II Helmet: The European Style for Advanced Safety and Comfort',
        desc: 'At Land Helmets, we are proud to introduce our European Style Type II Helmet, designed with the rigorous demands of industrial and outdoor environments in mind. Our helmet not only meets but exceeds safety standards, ensuring the highest level of protection and comfort for your team.',
        btnText: 'Get In touch with an expert',
        imgLink: '/',
    },
    section2: {
        id: uuidv4(),
        image: typeIIPic,
        imgLink: '/contact',
        heading: 'Customization for your Brand',
        desc: 'Customize your Helmet with our logos, reflective stickers, and packaging. Our in-house customization services allow you to brand your helmets, making them not just a piece of safety equipment, but also a part of your company identity',
        btnText: 'Get In touch with an expert',
    },
    keyFeatures: [
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
            description: 'Weighing just 430g, the helmet is designed for all-day comfort, reducing wearer fatigue without compromising on safety.'
        },
        {
            title: 'Versatile Use',
            description: 'Equiped with features like lamp clips, earmuffs slots , and an adjustable ratchet system, the Type II helmet is adaptable to various job requirements and conditions.'
        },
        {
            title: 'Extended Lifespan',
            description: 'Built to last, our helmet boasts a 10-year lifespan, offering long-term reliability and safety.'
        }
    ],
    brand: {
        title: 'Customization for Your Brand',
        text: 'Customize your helmets with logos, reflective stickers, and packaging. Our in-house customization services allow you to brand your helmets, making them not just a piece of safety equipment, but also a part of your company\'s identity.'
    },
    applications: {
        title: 'Applications',
        text: 'Our Type II helmet is designed for a broad range of applications, ensuring safety across different sectors:',
        options: [
            { title: 'Construction, Mining, Forestry', text: 'Versatile helmets built for tough environments - construction, mining, and forestry.' },
            { title: 'Oil, Gas, Chemical Industries', text: 'Safety first in hazardous environments - oil, gas, and chemical industries.' },
            { title: 'Utilities, Telecoms, Rope Access', text: 'Stay secure during utility work, telecom installations, and rope access tasks.' },
            { title: 'Emergency Services, Rescue Equipment', text: 'Equip yourself for lifesaving missions with our top-quality helmets.' },
            { title: 'And many more...', text: 'Whatever your profession, we\'ve got you covered with our versatile helmets.' }
        ]
    },
    whyToChoose: {
        title: 'Why Choose Land Helmets?',
        text: 'With Land Helmets, you\'re not just purchasing safety equipment; you\'re investing in a partnership that prioritizes your team\'s safety and your brand\'s visibility. Contact us today to learn more about our Type II helmets and how we can assist with your safety needs.',
        image: thumb1
    }
}


export default ModelsTypeI;