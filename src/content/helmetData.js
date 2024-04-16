import { v4 as uuidv4 } from 'uuid';

import img1 from '../assets/img/products/model-m02/1.png';
import img2 from '../assets/img/products/model-m02/2.png';
import img3 from '../assets/img/products/model-m02/3.png';
import img4 from '../assets/img/products/model-m02/4.png';
import img5 from '../assets/img/products/model-m02/5.png';
import img6 from '../assets/img/products/model-m02/6.png';
import img7 from '../assets/img/products/model-m02/7.png';
import img8 from '../assets/img/products/model-m02/8.png';
import imga1 from '../assets/img/products/model-m10/1.png';
import imga2 from '../assets/img/products/model-m10/2.png';
import imga3 from '../assets/img/products/model-m10/3.png';
import imga4 from '../assets/img/products/model-m10/4.png';
import imga5 from '../assets/img/products/model-m10/5.png';
import imga6 from '../assets/img/products/model-m10/6.png';
import imga7 from '../assets/img/products/model-m10/7.png';
import imga8 from '../assets/img/products/model-m10/8.png';
import imgb1 from '../assets/img/products/model-m12/1.png';
import imgb2 from '../assets/img/products/model-m12/2.png';
import imgb3 from '../assets/img/products/model-m12/3.png';
import imgb4 from '../assets/img/products/model-m12/4.png';
import imgb5 from '../assets/img/products/model-m12/5.png';
import imgb6 from '../assets/img/products/model-m12/6.png';
import imgb7 from '../assets/img/products/model-m12/7.png';
import imgb8 from '../assets/img/products/model-m12/8.png';

import BannerM10 from '../assets/img/products/hero2.jpg';
import BannerM12 from '../assets/img/products/hero1.jpg';
import BannerM02 from '../assets/img/products/hero5.png';


const helmetData = {
    m02: {
        cover: {
            id: uuidv4(),
            img: img1,
            heading: 'White',
        },

        banner: BannerM02,

        variants: [
            {
                id: uuidv4(),
                img: img2,
                heading: 'Yellow',
            },
            {
                id: uuidv4(),
                img: img3,
                heading: 'Orange',
            },
            {
                id: uuidv4(),
                img: img4,
                heading: 'Red',
            },
            {
                id: uuidv4(),
                img: img8,
                heading: 'Gray',
            },
            {
                id: uuidv4(),
                img: img6,
                heading: 'Blue',
            },
            {
                id: uuidv4(),
                img: img7,
                heading: 'Black',
            },
            {
                id: uuidv4(),
                img: img5,
                heading: 'Green',
            },
             {
                id: uuidv4(),
                img: img1,
                heading: 'White',
            }
        ]
    },
    m10: {

        banner: BannerM10,


        cover: {
            id: uuidv4(),
            img: imga1,
            heading: 'Orange',
        },
        variants: [
            {
                id: uuidv4(),
                img: imga2,
                heading: 'White',
            },
            {
                id: uuidv4(),
                img: imga3,
                heading: 'Gray',
            },
            {
                id: uuidv4(),
                img: imga4,
                heading: 'Blue',
            },
            {
                id: uuidv4(),
                img: imga8,
                heading: 'Black',
            },
            {
                id: uuidv4(),
                img: imga6,
                heading: 'Red',
            },
            {
                id: uuidv4(),
                img: imga7,
                heading: 'Yellow',
            },
            {
                id: uuidv4(),
                img: imga5,
                heading: 'Green',
            }, {
                id: uuidv4(),
                img: imga1,
                heading: 'Orange',
            },
        ]
    }
    ,
    m12: {
        cover: {
            id: uuidv4(),
            img: imgb5,
            heading: 'White',
        },
        banner: BannerM12,

        variants: [
            {
                id: uuidv4(),
                img: imgb1,
                heading: 'Green',
            },
            {
                id: uuidv4(),
                img: imgb2,
                heading: 'Orange',
            },
            {
                id: uuidv4(),
                img: imgb3,
                heading: 'Red',
            },
            {
                id: uuidv4(),
                img: imgb4,
                heading: 'Roval',
            },
            {
                id: uuidv4(),
                img: imgb8,
                heading: 'Blue',
            },
            {
                id: uuidv4(),
                img: imgb6,
                heading: 'Yellow',
            },
            {
                id: uuidv4(),
                img: imgb7,
                heading: 'Carbon Fiber',
            },
            {
                id: uuidv4(),
                img: imgb5,
                heading: 'White',
            }
        ]

    }
}

export default helmetData;
