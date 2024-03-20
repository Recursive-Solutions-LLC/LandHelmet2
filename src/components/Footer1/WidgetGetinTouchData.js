import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';

const WidgetGetinTouchData = [
    {
        id: uuidv4(),
        icon: <AiOutlinePhone />,
        heading: 'Phone Number',
        text: '+1 (657) 319-5842',
    },

    {
        id: uuidv4(),
        icon: <AiOutlineMail />,
        heading: 'Phone Number',
        text: '+1 (657) 319-5842',
    },

    {
        id: uuidv4(),
        icon: <BiMap />,
        heading: 'Phone Number',
        text: '+1 (657) 319-5842',
    },
];

export default WidgetGetinTouchData;
