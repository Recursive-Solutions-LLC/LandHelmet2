import { v4 as uuidv4 } from 'uuid';
import M10 from '../assets/img/about-us/type-II/model-10/m10.jpg';
import typeII from '../assets/img/icon/helmet-types/typeII.svg';



const ModelsTypeI = [

    {
        id: uuidv4(),
        bgImg: M10,
        icon: typeII,
        heading: 'M10',
        btnText: 'Contact Us',
    },


];

export default ModelsTypeI;