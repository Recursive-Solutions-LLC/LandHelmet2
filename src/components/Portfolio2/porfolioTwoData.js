import { v4 as uuidv4 } from 'uuid';
import img1 from '../../assets/img/portfolio/1.jpg';
import img2 from '../../assets/img/portfolio/2.jpg';


const portfolioTwoData = [
    {
        id: uuidv4(),
        image: img1,
        name: 'We prioritize world-class customer care project management for exceptional service. With a focus on direct access, our team of technical experts emerges as your dedicated creative problem solvers, cutting out middlemen for streamlined solutions and enhanced support.',
        heading: 'Effortless  Direct Communication',
        cost: '/contact',
    },

    {
        id: uuidv4(),
        image: img2,
        name: 'Harness the expertise of our adept in-house R&D team, armed with state-of-the-art technology like 3D scanning, rapid prototyping, and an elite testing lab. Experience streamlined product development and unrivaled efficiency through advanced material selection and seamless expert collaboration, all without the hassle of intermediaries.',
        heading: 'In-House R&D and Advance Technology ',
        cost: '/contact',
    },
    {
        id: uuidv4(),
        image: img2,
        name: 'Our commitment lies in proactively integrating key attributes into our products, preempting potential issues and prioritizing quality control. Through prototyping development, we uncover and address issues early, gather crucial feedback, and expedite the production process, ultimately enhancing the user experience.',
        heading: 'Integrating Key Attributes for Quality Products',
        cost: '/contact',
    },

];

export default portfolioTwoData;
