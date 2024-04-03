import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/services/odm.jpg';
import thumb2 from '../../assets/img/services/oem.png';
import thumb3 from '../../assets/img/services/global-distributor.jpg';
import thumb4 from '../../assets/img/services/AE9I5943.jpg';
const servicesThreeData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        index: '01',
        heading: 'Craft Unforgettable User Experiences',
        subHeading: 'by Designing Your Own Helmet', 
        text: 'From concept to creation, our expert team collaborates closely with you to develop customized safety helmets that reflect your brand identity while adhering to the highest safety standards.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        index: '02',
        heading: 'Empower your Brand',
        subHeading: 'with our Personalized Helmets', 
        text: 'We offer a diverse range of options to meet your specific requirements.Our flexible OEM solutions ensure seamless integration with your objectives.',
    }
];

export default servicesThreeData;
