import { v4 as uuidv4 } from 'uuid';
import img2 from '../../assets/img/portfolio/project2.jpg';
import img4 from '../../assets/img/portfolio/project4.jpg';


const capabilitiesContent = {
    section1: {
        title: "Crafting Successful Products",
        subtitle: "through design at the intersection of technology, aesthetics and purpose.",
        image: {
            src: "",
            alt: "people planning together"
        },

        featured: [
            {
                id: uuidv4(),
                image: img4,
                text: 'Our highly capable in-house R&D team is equipped with state-of-art tecnology, including 3D scanning, rapid prototyping, and a top notch testing lab, significantly accelerating innovation and product development.',
                link: "/contact",
                callToAction: "Bring your ideas to life",
                heading: 'In-House R&D ',
            },

            {
                id: uuidv4(),
                image: img2,
                text: 'We specialize in integrating tailored solutions into our manufacturing process, enhancing your brand’s effectiveness through customization, packing, branding, and various accessories to tailor helmets to your requirements',
                link: "/contact",
                callToAction: "Make it happend",
                heading: 'One-Stop Manufacturing',
            }
        ]
    },

}

export default capabilitiesContent