import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const contactData = [
    {
        id: uuidv4(),
        icon: <AiOutlineMail />,
        heading: 'Email Address',
        text: 'Sent mail anytime',
        item1: 'info@landhelmets.com',
        item2: '',
        action: 'mailto:info@landhelmets.com'
    },

    {
        id: uuidv4(),
        icon: <AiOutlinePhone />,
        heading: 'Phone Number',
        text: 'Call us anytime',
        item1: '+1 (657) 319-5842',
        item2: '',
        action: 'tel:+1 (657) 319-5842'
    },

    {
        id: uuidv4(),
        icon: <FaMapMarkerAlt />,
        heading: 'Office Address',
        text: 'Sent mail anytime',
        item1: '6101 Ball Rd #201, Cypress, CA 90630',
        item2: '',
        action: 'https://www.google.com/maps/place/Land+Helmets+%2F+GTC+Land+Sports+INC/@33.8175408,-118.0289766,17z/data=!3m2!4b1!5s0x80dd2eb6e84ae251:0x56609acb669e7cd1!4m6!3m5!1s0x80dd2f55a1453e31:0x5071f95e3a357f2d!8m2!3d33.8175364!4d-118.0264017!16s%2Fg%2F11vbjjq_jt?entry=ttu'
    },
];

export default contactData;
