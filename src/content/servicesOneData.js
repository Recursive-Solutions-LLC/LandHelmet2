import { v4 as uuidv4 } from 'uuid';
import Bg1 from '../assets/img/home3/hero5.jpeg';
import Bg3 from '../assets/img/home1/eng2.jpg';
import Bg4 from '../assets/img/home3/hero6.jpeg';
import Bg2 from '../assets/img/home3/hero8.jpeg';
import Icon1 from '../assets/img/icon/s1.png';
import Icon2 from '../assets/img/icon/s2.png';
import Icon3 from '../assets/img/icon/s3.png';


const servicesOneData = [
    {
        id: uuidv4(),
        bgImg: Bg2,
        icon: Icon1,
        heading: 'Conductive Helmet',
        btnText: 'Contact Us',
    },
    {
        id: uuidv4(),
        bgImg: Bg1,
        icon: Icon2,
        heading: 'Electrical Helmet',
        btnText: 'Contact Us',
    },



    {
        id: uuidv4(),
        bgImg: Bg4,
        icon: Icon3,
        heading: ' General Helmet',
        btnText: 'Contact Us',
    },


];

export default servicesOneData;
