import { BsAward, BsTrophy } from 'react-icons/bs';
import { FaDollarSign, FaRegBuilding, FaToolbox, FaWordpress } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import r1 from '../../assets/img/icon/r1.svg';
import r2 from '../../assets/img/icon/r2.svg';
import r3 from '../../assets/img/icon/r3.svg';
import r4 from '../../assets/img/icon/r4.svg';
import r5 from '../../assets/img/icon/r5.svg';
import r6 from '../../assets/img/icon/r6.svg';
import r7 from '../../assets/img/icon/r7.svg';
import r8 from '../../assets/img/icon/r8.svg';
import r9 from '../../assets/img/icon/r9.svg';
import r10 from '../../assets/img/icon/r10.svg';
import r11 from '../../assets/img/icon/r11.svg';
import r12 from '../../assets/img/icon/r12.svg';
const timeLineData = [
    {
        id: uuidv4(),
        year: 1,
        icon: <img src={r2} alt='scaning'/>,
        heading: 'Scanning and 3D Drawing',
        text: "The client's 3D helmet model or scanned existing one undergoes CNC 3D scanning, yielding detailed digital drawings. These drawings serve as a precise foundation for further development and adjustments.",
        transform: '',
    },

    {
        id: uuidv4(),
        year: 2,
        icon: <img src={r3} alt='confirmation'/>,
        heading: 'Customer Confirmation',
        text: 'After each significant step, we pause for your feedback. Your confirmation is essential to proceed, ensuring the project aligns with your vision and requirements',
        transform: 'transform-bottom',
    },

    {
        id: uuidv4(),
        year: 3,
        icon: <img src={r4} alt='cnc'/>,
        heading: 'CNC Master & Pads',
        text: 'Using the confirmed 3D drawings, we create CNC master molds and pads, laying the groundwork for prototype production',
        transform: '',
    },

    {
        id: uuidv4(),
        year: 4,
        icon: <img src={r5} alt='open'/>,
        heading: 'Open EPS Mold',
        text: 'An EPS mold is developed for the helmets inner lining, focusing on impact absorption and comfort',
        transform: 'transform-bottom',
    },

    {
        id: uuidv4(),
        year: 5,
        icon: <img src={r6} alt='test'/>,
        heading: 'EPS Mold Testing and Improvement',
        text: 'We conduct thorough testing on the EPS mold to ensure optimal performance and safety. Based on the results, we make necessary adjustments for improvement',
        transform: '',
    },

    {
        id: uuidv4(),
        year: 6,
        icon: <img src={r7} alt='open pc'/>,
        heading: 'Open PC Mold',
        text: 'Parallel to the EPS mold, a PC mold is created for the helmets outer shell, emphasizing durability and protection',
        transform: 'transform-bottom',
    },  {
        id: uuidv4(),
        year: 7,
        icon: <img src={r8} alt='mold'/>,
        heading: 'Mold Testing and Improvement',
        text: 'Both the EPS and PC molds undergo rigorous testing. Feedback from these tests leads to refinements, ensuring the highest quality standards are met',
        transform: '',
    },

    {
        id: uuidv4(),
        year: 8,
        icon: <img src={r9} alt='delivery sample'/>,
        heading: 'Preliminary Sample Delivery',
        text: 'A preliminary sample, incorporating all improvements, is delivered for your review, marking a significant milestone in the development process',
        transform: 'transform-bottom',
    }, {
        id: uuidv4(),
        year: 9,
        icon: <img src={r10} alt='testing'/>,
        heading: 'Testing Sample',
        text: 'We produce a testing sample designed to undergo extensive safety and performance evaluations, adhering to industry standards and certifications',
        transform: '',
    },

    {
        id: uuidv4(),
        year: 10,
        icon: <img src={r11} alt='sales sample'/>,
        heading: 'Sales Sample',
        text: 'Once the testing sample is approved, we create a sales sample, showcasing the final product design and features for marketing and pre-sales activities',
        transform: 'transform-bottom',
    }, {
        id: uuidv4(),
        year: 11,
        icon: <img src={r12} alt='Production'/>,
        heading: 'Mass Production',
        text: 'With your final confirmation, we proceed to mass production, translating our collaborative efforts into high-quality helmets ready for the market',
        transform: '',
    },
];

export default timeLineData;
