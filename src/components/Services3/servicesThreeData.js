import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/capabilities/odm.jpg';
import thumb2 from '../../assets/img/capabilities/oem.png';
import thumb3 from '../../assets/img/capabilities/global-distributor.jpg';
import thumb4 from '../../assets/img/capabilities/AE9I5943.jpg';
const servicesThreeData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        heading: 'Build your own exclusive Helmet',
        subHeading: 'with our in-house design and engineering capabilities', 
        text: `With decades of experience and know how, your design and engineering costs can be drastically reduced and obsolescence risks are eliminated. Let us design, engineer, and produce your company's products smoothly and timely, meeting your deadline and budget requirements.`
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        heading: 'Empower your Brand',
        subHeading: 'with our Wide Range Public Molds Available', 
        text: 'We also offer existing up-to-date and stylish open mold (of helmets) if customers are lookingfor a faster way to getting their helmets in production . This eliminates the manufacturingprocess by using open molds we have in stock This method is known as private label and it isan effective option to quickly getting helmets onto shelves and eliminating the cost of manufacturing.',
    }
];

export default servicesThreeData;
