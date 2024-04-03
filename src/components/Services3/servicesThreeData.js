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
        text: 'Our Team is dedicated to bringing your helmet concepts to life, ensuring they align seamlessly with your brand identity while prioritizing uncompromising safety standards from inception to execution.  Check our R&D Capabilities',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        index: '02',
        heading: 'Empower your Brand',
        subHeading: 'with our Personalized Helmets', 
        text: 'Discover a Diverse Array of Public Molds to Elevate Your Brand: We provide a versatile selection tailored to your needs from Type I to Type II options.With our adaptable OEM solutions, aligning seamlessly with your objectives has never been easier.',
    }
];

export default servicesThreeData;
