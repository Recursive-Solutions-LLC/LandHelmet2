import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/capabilities/approach/1.jpg';
import thumb2 from '../../assets/img/capabilities/approach/2.jpg';
import thumb3 from '../../assets/img/capabilities/approach/3.jpg';

import rd1 from "../../assets/img/icon/r1.svg"
import rd4 from "../../assets/img/icon/r4.svg"
import rd7 from "../../assets/img/icon/r7.svg"

const approchData = [

    {
        id: uuidv4(),
        thumb: thumb1,
        icon: "",
        heading: 'Effortless  Direct Communication',
        text: 'We prioritize world-class customer care project management for exceptional service. With a focus on direct access, our team of technical experts emerges as your dedicated creative problem solvers, cutting out middlemen for streamlined solutions. Experience unparalleled satisfaction with our customer-centric approach.',
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        icon: "",
        heading: 'In-House R&D and Advance Technology ',
        text: 'Harness the expertise of our adept in-house R&D team, armed with state-of-the-art technology like 3D scanning, rapid prototyping, and an elite testing lab. Experience streamlined product development and unrivaled efficiency through advanced material selection and seamless expert collaboration, all without the hassle of intermediaries.',
    },
    {
        id: uuidv4(),
        thumb: thumb3,
        icon: "",
        heading: 'Integrating Key Attributes for Quality',
        text: ' Our commitment lies in proactively integrating key attributes into our products, preempting potential issues and prioritizing quality control. Through prototyping development, we uncover and address issues early, gather crucial feedback, and expedite the production process, ultimately enhancing the user experience.',
    },
    
    {
        id: uuidv4(),
        thumb: thumb3,
        icon: "",
        heading: 'Deliver a Seamless End-to-End  Quality Solution',
        text: 'From mold opening to final product assembly, our integrated manufacturing facilities offer a comprehensive one-stop solution. With a steadfast focus on cost reduction and productivity enhancement, we ensure efficiency at every step of the process.',
    },{
        id: uuidv4(),
        thumb: thumb3,
        icon: "",
        heading: 'Cost Optimization',
        text: 'From Development to Installation.Experience seamless process development, documentation, and manufacturing line setup within a lean framework. Clear communication and quality management are key when working with us. Our team ensures ongoing quality control, minimizing costs and maximizing performance.',
    },{
        id: uuidv4(),
        thumb: thumb3,
        icon: "",
        heading: 'Partner with Confidence',
        text: 'Our commitment to excellence and customer satisfaction drives our global distribution strategy. By partnering with Land Helmets, you gain more than a supplier, you gain a partner dedicated to end users success with strong principles and a strict bottom line to safeguard business secrets and maintain project confidentiality',
    },
];

export default approchData;
