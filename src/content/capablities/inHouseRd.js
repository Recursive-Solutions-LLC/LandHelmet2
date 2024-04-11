import thumb1 from "../../assets/img/capabilities/QualityControl/innovation.jpg";
import thumb2 from "../../assets/img/capabilities/R&D/improvement.jpg";
import thumb3 from "../../assets/img/capabilities/R&D/your-participation.jpg";
import thumb4 from "../../assets/img/capabilities/R&D/together.jpg";

import bannerImg1 from "../../assets/img/capabilities/R&D/Carousel/businessman-examining-workpieces-in-a-modern-facto-2023-11-27-05-15-34-utc-min.jpg";
import bannerImg2 from "../../assets/img/capabilities/R&D/Carousel/handsome-mature-engineer-working-in-laboratory-in-2023-11-27-04-52-59-utc-min.jpg";
import bannerImg3 from "../../assets/img/capabilities/R&D/Carousel/specialist-male-african-american-engineer-workers-2024-03-15-18-26-39-utc-min.jpg";

import Banner1Img from "../../assets/img/capabilities/InHouse/banner1.png"
import featured1 from "../../assets/img/capabilities/InHouse/featured1.png"
import featured2 from "../../assets/img/capabilities/InHouse/featured2.png"

import TypeII_cover from "../../assets/img/products/cover-II.png"

const rdContent = {
    titleBanner: "WE ARE DEDICATED TO TRANSFORM IDEAS INTO",
    subtitleBanner: "PRODUCTS AND EXPERIENCES",
    title: "In-House R&D",
    Image: TypeII_cover,

    banner1: {
        title: "Protyping",
        subtitle: "We'll guide you from concept to a tangible manifestation of your product. Whether you require a mechanical mockup for functional testing or investor presentations, an appearance model to visualize the look and feel of your product precisely, or a rapid 3D print to grasp its real-world scale.",
        image: {

            src: Banner1Img,
            alt: "a image of a helmet"

        },
        bullets:[
            "Prototyping serves to diminish development costs by pinpointing and remedying design flaws prior to full-scale production.",
            "It empowers you to pinpoint and tackle potential quality concerns early on in the development phase.",
            "Presenting potential investors with a physical prototype enhances your pitch, showcasing a robust concept.",
            "Prototypes facilitate the evaluation of design functionality in real-world scenarios, allowing for invaluable feedback and the enhancement of user experience."
          ] ,
    },
    featured1: [
        {
            aboutImg: featured1,
            right: false,
            title: "Product Visualization",
            subtitle: "We take great care in designing your product with accessibility in mind to ensure that it is practical for all users.",
            texts: [
                "Our team is Equipped with cutting-edge computer-aided design (CAD) and engineering (CAE) software and excels in creating innovative, optimized designs with speed and precision.",
            ],
            bullets: [
                "3D Rendering",
                "3D Scanning",
                "3D Drawing"
            ]
        },

        {
            aboutImg: featured2,
            right: true,
            title: "Product Design & Development",
            subtitle: "",
            texts: [
                "Every design and engineering decision we make a rigorously considered against a long list of criteria including: market & user insights, costs, aesthetics, safety, quality, reliability, serviceability, sustainability, manufacturing, and assembly.",
                "There’s a highly choreographed rhythm to our product development process and a deep level of collaboration & transparency from our team we believe you will appreciate. ",
                "The foundation of our collaborative approach is rooted in impeccable knowledge capture and sharing – documenting every trial, every process and every innovation along the way"
            ]
        },

    ],


    sections: [
    {
        title: "Let's Innovate Together",
        img: thumb4,
        text: "We believe in the power of partnership to create outstanding helmet solutions. By joining forces with Land Helmets, you're not just getting a supplier; you're gaining a dedicated R&D partner committed to bringing your vision to life. We look forward to embarking on this innovative journey with you and developing products that set new standards in safety, design, and comfort.",
    }],

    carouselImg: [
        { img: bannerImg1 },
        { img: bannerImg2 },
        { img: bannerImg3 },
    ],
    faqs: []

};

export default rdContent;