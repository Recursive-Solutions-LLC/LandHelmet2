import { v4 as uuidv4 } from 'uuid';
import featured1 from '../../assets/img/capabilities/featured1.png';
import featured2 from '../../assets/img/capabilities/featured2.png';
import about from "../../assets/img/about/about.jpg";

const capabilitiesContent = {
    section1: {
        title: "Crafting Successful Products",
        subtitle: "",
        texts:[
        "At Land Helmets, we work in both manufacturing and production. If our customer is looking into developing a brand new helmet from an original design, we manufacture tooling and then work up a plan and timeline to set up production accordingly to a cost that our customer can take advantage.",
        "We also offer existing up-to-date and stylish open mold (of helmets) if customers are looking for a faster way to getting their helmets in production . This eliminates the manufacturing process by using open molds we have available. This method is known as private label and it is an effective option to quickly getting helmets onto shelves and eliminating the cost of manufacturing."
        ],
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