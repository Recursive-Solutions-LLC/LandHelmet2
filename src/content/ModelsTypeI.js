import { v4 as uuidv4 } from 'uuid';
import Bg1 from '../assets/img/home1/eng.jpg';
import Bg2 from '../assets/img/home1/power.jpg';
import typeI from '../assets/img/icon/helmet-types/typeI.svg';



const ModelsTypeI = [
    {
        id: uuidv4(),
        bgImg: Bg2,
        icon: typeI,
        heading: 'M12',
        btnText: 'Contact Us',
    },
    {
        id: uuidv4(),
        bgImg: Bg1,
        icon: typeI,
        heading: 'M02',
        btnText: 'Contact Us',
    },
];

export default ModelsTypeI;