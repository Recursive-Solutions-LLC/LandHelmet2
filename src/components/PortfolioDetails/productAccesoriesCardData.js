import { v4 as uuidv4 } from 'uuid';

import faceShieldMesh from "../../assets/img/lh-01/image10.jpeg";
import suspensionKit from "../../assets/img/lh-01/image11.jpeg";
import chinStrap from "../../assets/img/lh-01/image12.jpeg";
import eyeShield from "../../assets/img/lh-01/image13.jpeg";
import earmuff from "../../assets/img/lh-01/image14.jpeg";
import fullFaceShield from "../../assets/img/lh-01/image15.jpeg";


const productAccesoriesCardData = [
    {
        image: faceShieldMesh,
        title: 'Full Face Shield Mesh',
        id: uuidv4(),
    },
    {
        image: suspensionKit,
        title: 'Replaceable Suspension Kit',
        id: uuidv4(),
    },
    {
        image: chinStrap,
        title: 'Replaceable Chin Strap',
        id: uuidv4(),
    },
    {
        image: eyeShield,
        title: 'Eye Shield Clear Anti-Fog',
        id: uuidv4(),
    },
    {
        image: earmuff,
        title: 'Mounted Earmuff',
        id: uuidv4(),
    },
    {
        image: fullFaceShield,
        title: 'Full Face Shield Clear',
        id: uuidv4(),
    }
];

export default productAccesoriesCardData;