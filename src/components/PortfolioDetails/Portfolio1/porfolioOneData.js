import { v4 as uuidv4 } from 'uuid';
import Img1 from '../../../assets/img/project/project1.jpg';
import thumb1 from '../../../assets/img/home3/service1.jpg';

const portfolioOneData = [
    {
        id: uuidv4(),
        image: Img1,
        category: 'Industrial',
        client: 'Rosalina D.',
        heading: 'Type I Helmet: Ultimate Protection for Industrial Excellence',
        desc: 'Land helmet is excited to present our Type I Helmet, specifically engineered to meet the rigorous safety standards required in industrial settings. This helmet combines cutting-edge design with top-grade materials to offer unparalleled protection, comfort, and durability.',
        btnText: 'Case Details',
        imgLink: '/',
        productType: 1,
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
    },
    {
        id: uuidv4(),
        image: Img1,
        category: 'Industrial',
        client: 'Rosalina D.',
        heading: 'Type II Helmet: The European Style for Advanced Safety and Comfort',
        desc: 'At Land Helmets, we are proud to introduce our European Style Type II Helmet, designed with the rigorous demands of industrial and outdoor environments in mind. Our helmet not only meets but exceeds safety standards, ensuring the highest level of protection and comfort for your team.',
        btnText: 'Case Details',
        imgLink: '/',
        productType: 2,
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
];

export default portfolioOneData;

/**

Of course! Here are some concise and attention-grabbing sentences for each topic:

1. Climbing: "Conquer new heights with our cutting-edge climbing helmets."
2. Outdoor: "Adventure awaits with our durable outdoor helmets."
3. Construction: "Stay safe on the job site with our reliable construction helmets."
4. Fall Protection: "Prevent accidents with our trusted fall protection helmets."
5. Arborist: "Protect yourself while tending to trees with our specialized arborist helmets."
6. Construction, Mining, Forestry: "Versatile helmets built for tough environments - construction, mining, and forestry."
7. Oil, Gas, Chemical Industries: "Safety first in hazardous environments - oil, gas, and chemical industries."
8. Utilities, Telecoms, Rope Access: "Stay secure during utility work, telecom installations, and rope access tasks."
9. Emergency Services, Rescue Equipment: "Equip yourself for lifesaving missions with our top-quality helmets."
10. And many more...: "Whatever your profession, we've got you covered with our versatile helmets."

 */