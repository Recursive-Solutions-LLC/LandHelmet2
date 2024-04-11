import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/products/M02.png';
import thumb2 from '../../assets/img/products/M12.png';
import thumb3 from '../../assets/img/products/18.png';

import rd1 from "../../assets/img/products/flag1.svg"
import rd4 from "../../assets/img/products/flag2.svg"
import rd7 from "../../assets/img/products/flag3.svg"

const approchData = [

    {
        id: uuidv4(),
        thumb: thumb1,
        icon: <img  src={rd1} alt="One-Stop icon" />,
        heading: 'M02',
        text: 'EN 12492 & EN 397',
        pageLink: '/model-m02'
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        icon: <img  src={rd4} alt="global icon" />,
        heading: 'M12',
        text: 'ANSI/ CSA Z89.1, EN 12492 EN 397',
        pageLink: '/model-m12'
    },
    {
        id: uuidv4(),
        thumb: thumb3,
        icon: <img  src={rd7} alt="testing facilities" />,
        heading: 'M10',
        text: ' ANSI/ CSA Z89.1',
        pageLink: '/model-m10'
    },
];

export default approchData;
