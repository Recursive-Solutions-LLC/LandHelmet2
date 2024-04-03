import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/about/approach/1.jpg';
import thumb2 from '../../assets/img/about/approach/2.jpg';
import thumb3 from '../../assets/img/about/approach/3.jpg';

import rd1 from "../../assets/img/icon/r1.svg"
import rd4 from "../../assets/img/icon/r4.svg"
import rd7 from "../../assets/img/icon/r7.svg"

const approchData = [

    {
        id: uuidv4(),
        thumb: thumb1,
        icon: <img src={rd1} alt="One-Stop icon" />,
        heading: 'One-Stop Manufacturing',
        text: 'Integrated operation from design to mass production',
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
        icon: <img src={rd7} alt="testing facilities" />,
        heading: 'Testing Facilities',
        text: ' we don’t compromise your safety, we care about you and your team',
    },
];

export default approchData;
