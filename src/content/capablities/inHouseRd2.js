import thumb1 from "../../assets/img/capabilities/QualityControl/innovation.jpg";
import thumb2 from "../../assets/img/capabilities/R&D/improvement.jpg";
import thumb3 from "../../assets/img/capabilities/R&D/your-participation.jpg";
import thumb4 from "../../assets/img/capabilities/R&D/together.jpg";

import bannerImg1 from "../../assets/img/capabilities/R&D/Carousel/businessman-examining-workpieces-in-a-modern-facto-2023-11-27-05-15-34-utc-min.jpg";
import bannerImg2 from "../../assets/img/capabilities/R&D/Carousel/handsome-mature-engineer-working-in-laboratory-in-2023-11-27-04-52-59-utc-min.jpg";
import bannerImg3 from "../../assets/img/capabilities/R&D/Carousel/specialist-male-african-american-engineer-workers-2024-03-15-18-26-39-utc-min.jpg";

import Banner1Img from "../../assets/img/capabilities/InHouse/banner1.png"
import featured1 from "../../assets/img/capabilities/InHouse/11.png"
import featured2 from "../../assets/img/capabilities/InHouse/10.png"

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
    featured1: [  {
        aboutImg: featured2,
        right: true,
        title: "In-House- Testing Facilities",
        subtitle: "",
        texts: [
            " Our In-house testing laboratory plays a pivotal role in our development process. Through meticulous testing and predictive analysis, we anticipate the safety performance of our products in advance.",
            "This proactive approach enables us to swiftly refine and revise designs, significantly reducing the product development cycle and expediting the launch of new products.",
            "Not only does this approach streamline processes, but it also translates to substantial cost savings by minimizing reliance on third-party testing facilities while safeguarding your proprietary designs."
        ]
    },

        {
            aboutImg: featured1,
            right: false,
            title: "In -House Tooling and Molding ",
            subtitle: "Our uniqueness lies in our ability to internally manufacture all tooling and molds, ensuring seamless production and unparalleled quality control.",
            texts: [
                "We offer comprehensive services, including:",
            ],
            bullets: [
                "Analyzing 3D drawings", 
                "Crafting Tooling Drawings",                
                "Executing Mold Making processes",
                "Generating Design for Manufacturing reports",
                "Conducting Mold Flow Analysis"
            ]
        },

      
    ],


    sections: [{
        title: "In-House R&D",
        img: thumb1,
        text: "At Land Helmets, our Research and Development (R&D) process is designed around collaboration, innovation, and efficiency. We involve you, our partner, at every stage of the process, ensuring that the final product not only meets but exceeds your expectations. Here's how our comprehensive R&D process works:",
    },
    {
        title: "Continuous Improvement Through Innovation",
        img: thumb2,
        text: "Our R&D team is continually exploring new materials, designs, and technologies to enhance the safety and comfort of our helmets. We invest in innovation to ensure our products set industry benchmarks for protection and wearability.",
    },
    {
        title: "Your Participation: The Key to Success",
        img: thumb3,
        text: "Our R&D process is uniquely structured to involve you closely, ensuring that each development phase meets your specifications. This collaboration not only minimizes errors but also saves time and costs, making the development journey as efficient as possible.",
    },
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