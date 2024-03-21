import { v4 as uuidv4 } from 'uuid';

const appointmentData = [
    {
        id: uuidv4(),
        day: 'Monday',
        time: '9AM - 6PM',
    },

    {
        id: uuidv4(),
        day: 'Tuesday',
        time: '9AM - 6PM',
    },

    {
        id: uuidv4(),
        day: 'Wednesday',
        time: '9AM - 6PM',
    },

    {
        id: uuidv4(),
        day: 'Thrusday',
        time: '9AM - 6PM',
    },

    {
        id: uuidv4(),
        day: 'Friday',
        time: '9AM - 6PM',
    },
];

export default appointmentData;
