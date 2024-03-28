import { v4 as uuidv4 } from 'uuid';
import Model12 from '../assets/img/about-us/type-I/model-12/m12.png';
import Model02 from '../assets/img/about-us/type-I/model-02/m02.jpg';
import typeI from '../assets/img/icon/helmet-types/typeI.svg';



const ModelsTypeI = [
    {
        id: uuidv4(),
        bgImg: Model12,
        icon: typeI,
        heading: 'M12',
        btnText: 'Talk to an expert',
    },
    {
        id: uuidv4(),
        bgImg: Model02,
        icon: typeI,
        heading: 'M02',
        btnText: 'Talk to an expert',
    },
];

export default ModelsTypeI;