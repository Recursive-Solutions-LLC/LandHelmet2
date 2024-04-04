import { v4 as uuidv4 } from 'uuid';
import featured1 from '../../assets/img/capabilities/featured1.png';
import featured2 from '../../assets/img/capabilities/featured2.png';
import about from "../../assets/img/about/about.jpg";

const capabilitiesContent = {
    section1: {
        title: "Crafting Successful Products",
        subtitle: "through design at the intersection of technology, aesthetics and purpose.",
        image: {
            src: about,
            alt: "people planning together"
        },

        featured: [
            {
                id: uuidv4(),
                image: featured1,
                text: 'Our highly capable in-house R&D team is equipped with state-of-art tecnology, including 3D scanning, rapid prototyping, and a top notch testing lab, significantly accelerating innovation and product development.',
                link: "/in-house-rd",
                callToAction: "Bring your ideas to life",
                heading: 'In-House R&D ',
            },

            {
                id: uuidv4(),
                image: featured2,
                text: 'We specialize in integrating tailored solutions into our manufacturing process, enhancing your brand’s effectiveness through customization, packing, branding, and various accessories to tailor helmets to your requirements',
                link: "/one-stop-manufacturing",
                callToAction: "Make it happend",
                heading: 'One-Stop Manufacturing',
            }
        ]
    },

}

export default capabilitiesContent