import { v4 as uuidv4 } from 'uuid';
import Bg1 from '../assets/img/home1/eng.jpg';
import Bg4 from '../assets/img/home1/gas.jpg';
import Bg2 from '../assets/img/home1/power.jpg';
import typeI from '../assets/img/icon/helmet-types/typeI.svg';
import typeII from '../assets/img/icon/helmet-types/typeII.svg';



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



    {
        id: uuidv4(),
        bgImg: Bg4,
        icon: typeII,
        heading: 'M10',
        btnText: 'Contact Us',
    },


];

export default ModelsTypeI;