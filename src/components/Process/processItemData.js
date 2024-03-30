import { v4 as uuidv4 } from 'uuid';

const processItemData = [
    {
        id: uuidv4(),
        number: '01',
        heading: 'Service Excellence & Innovation',
        text: 'Delivers exceptional service with direct communication and strong confidentiality practices, fueled by in-house R&D and a commitment to quality, safety, and innovation.',
    },

    {
        id: uuidv4(),
        number: '02',
        heading: 'Manufacturing Expertise & Efficiency',
        text: 'Employs deep manufacturing expertise for cost reduction and productivity, optimizing processes through lean manufacturing and detailed documentation.',
    },

    {
        id: uuidv4(),
        number: '03',
        heading: 'Quality Assurance & Confidentiality',
        text: 'Ensures products meet high standards for quality and durability while strictly protecting business secrets and project confidentiality.',
    },

    {
        id: uuidv4(),
        number: '04',
        heading: 'One-Stop Integrated Solution',
        text: 'Provides a comprehensive solution from mold opening to assembly, leveraging integrated facilities for seamless and innovative production.',
    },
];

export default processItemData;
