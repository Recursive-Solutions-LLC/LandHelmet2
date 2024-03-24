import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/approch1.jpg';
import thumb2 from '../../assets/img/approch2.jpg';
import thumb3 from '../../assets/img/approch3.jpg';

import rd1 from "../../assets/img/icon/r1.svg"
import rd4 from "../../assets/img/icon/r4.svg"
import rd7 from "../../assets/img/icon/r7.svg"

const approchData = [

    {
        id: uuidv4(),
        thumb: thumb1,
        icon: <img src={rd1} alt="One-Stop icon" />,
        heading: 'One-Stop Manufacturing',
        text: 'Integrated operation from design to production',
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        icon: <img src={rd4} alt="global icon" />,
        heading: 'Global Manufacturing Hub',
        text: 'Located in Dongguan, the global manufacturing hub',
    },
    {
        id: uuidv4(),
        thumb: thumb3,
        icon: <img src={rd7} alt="competitive rates icon" />,
        heading: 'Competitive Rates',
        text: 'High-quality helmets at competitive rates',
    },
];

export default approchData;
