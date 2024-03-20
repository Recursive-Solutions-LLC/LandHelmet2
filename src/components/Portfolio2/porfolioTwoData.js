import { v4 as uuidv4 } from 'uuid';
import img1 from '../../assets/img/portfolio/case1.jpg';
import img2 from '../../assets/img/portfolio/case2.jpg';


const portfolioTwoData = [
    {
        id: uuidv4(),
        image: img1,
        name: 'Type I helmets are engineered for superior protection against impacts from above, ideal for industries where vertical hazards, like falling objects or overhead obstacles, are a common risk. These helmets ensure top-level safety for workers in construction, mining, and forestry',
        heading: 'Type I: Top Impact Protection',
        cost: '',
    },

    {
        id: uuidv4(),
        image: img2,
        name: 'Type II helmets offer enhanced protection against side impacts, addressing the need for comprehensive head safety. They are particularly suited for dynamic environments where lateral hazards, such as swinging equipment or side collisions',
        heading: 'Type II: Comprehensive Lateral Safety',
        cost: '',
    },

];

export default portfolioTwoData;
