import { v4 as uuidv4 } from 'uuid';

import img2 from '../../assets/img/portfolio/project2.jpg';
import img3 from '../../assets/img/portfolio/project3.jpg';
import img4 from '../../assets/img/portfolio/project4.jpg';

const projectFilterTwoData = [
    {
        id: uuidv4(),
        image: img4,
        name: 'Analyzes market trends and competition to inform development',
        price: '$56,000',
        heading: 'Product Research',
        category: 'bedroom',
    },

    {
        id: uuidv4(),
        image: img2,
        name: 'Shapes products by integrating market insights and innovation',
        price: '',
        heading: 'Product Development',
        category: 'floor',
    },

    {
        id: uuidv4(),
        image: img3,
        name: 'Turns designs into tangible goods through production processes',
        price: '$56,000',
        heading: 'Product Manufacturing',
        category: 'home',
    }
];

export default projectFilterTwoData;
