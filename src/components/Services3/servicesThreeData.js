import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/services/odm.jpg';
import thumb2 from '../../assets/img/services/oem.png';
import thumb3 from '../../assets/img/services/global-distributor.jpg';
import thumb4 from '../../assets/img/services/AE9I5943.jpg';
const servicesThreeData = [
    {
        id: uuidv4(),
        thumbnail: thumb2,
        index: '01',
        heading: ' Advanced ODM Solutions',
        text: 'From concept to creation, our expert team collaborates closely with you to develop customized safety helmets that reflect your brand identity while adhering to the highest safety standards.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb1,
        index: '02',
        heading: 'Comprehensive OEM Capabilities',
        text: 'We offer a diverse range of options to meet your specific requirements.Our flexible OEM solutions ensure seamless integration with your objectives.',
    },
    {
        id: uuidv4(),
        thumbnail: thumb4,
        index: '03',
        heading: 'Innovative Technology and Design',
        text: ' Stay ahead of the curve with our cutting-edge technology.Leveraging state-of-the-art equipment and industry-leading expertise.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb3,
        index: '04',
        heading: 'Global Reach and Compliance',
        text: 'With a global footprint and a commitment to regulatory compliance, we ensure that your safety helmets meet the highest international standards.',
    }
];

export default servicesThreeData;
