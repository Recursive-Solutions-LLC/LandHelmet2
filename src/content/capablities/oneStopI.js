import { v4 as uuidv4 } from "uuid";

import thumb1 from "../../assets/img/capabilities/QualityControl/quality-control.jpg";
import thumb2 from "../../assets/img/capabilities/QualityControl/innovation.jpg";
import thumb3 from "../../assets/img/capabilities/QualityControl/certified.jpg";
import thumb4 from '../../assets/img/products/why_us.png';

import bannerImg1 from "../../assets/img/capabilities/QualityControl/Carousel/middle-aged-businessman-with-digital-tablet-in-fac-2023-11-27-05-30-12-utc-min.jpg";
import bannerImg2 from "../../assets/img/capabilities/QualityControl/Carousel/quality-control-inspector-and-young-workers-commun-2023-11-27-05-09-33-utc-min.jpg";
import bannerImg3 from "../../assets/img/capabilities/QualityControl/Carousel/technician-working-in-factory-and-doing-quality-co-2023-11-27-05-37-01-utc-min.jpg";

import cover from "../../assets/img/capabilities/OneStop/cover.jpg";

import featured1 from "../../assets/img/capabilities/OneStop/featured1.png"
import featured2 from "../../assets/img/capabilities/OneStop/featured2.png"
import featured3 from "../../assets/img/capabilities/OneStop/featured3.png"
import banner1 from  "../../assets/img/capabilities/OneStop/banner1.png"

const oneStopContentI = {
    title: "One stop Manufacturing",
    Image: cover,
    featured1: [
        {
            id: uuidv4(),
            aboutImg: featured1,
            right: true,
            title: "Integrated Manufacturing",
            subtitle: "We take great care in designing your product with accessibility in mind to ensure that it is practical for all users.",
            texts: [
                "From mold opening to final product assembly, our fully integrated manufacturing facilities deliver on a clear mission: reduce costs, boost productivity, and streamline operations for an improved seamless one-stop, beginning to end manufacturing experience.",
            ],
        },

        {
            id: uuidv4(),
            aboutImg: featured2,
            right: false,
            title: "Resource Access | Open Tooling | Mold",
            subtitle: "",
            texts: [
            "A diverse range of public molds for your helmet production needs, along with access to modular, replaceable accessories available separately.",
            "EPS IN-MOLD Helmets Discover the ultimate in safety innovation with our EPS IN-MOLD helmets. Designed to provide unmatched protection and comfort, these helmets are crafted with precision to meet the highest industry standards"
            ]
        },

        {
            id: uuidv4(),
            aboutImg: featured3,
            right: true,
            title: "Comprehensive Capabilities for Diverse Needs",
            subtitle: "",
            texts: [
            "We are specialize in integrating tailored solutions into our manufacturing process, enhancing your brand’s effectiveness through branding, packing, and various accessories to tailor helmets to your requirements.",
            ]
        },

        {
            id: uuidv4(),
            right: false,
            title: "Product Branding",
            texts:[ "From logos and reflective stickers to specialized packaging, our in-house capabilities allow for extensive customization to meet your branding needs."],
            aboutImg: banner1,
        }

    ],

    banner1: [],

    sections: [{
        title: "Quality Control",
        img: thumb1,
        text: "At Land Helmets, our commitment to quality is at the forefront of everything we do. We understand that the safety and satisfaction of your workforce are paramount. That's why we've established a comprehensive quality control process that guarantees each helmet we produce meets the highest standards of safety, durability, and comfort.",
    },
    {
        title: "Continuous Improvement Through Innovation",
        img: thumb2,
        text: "Our R&D team is continually exploring new materials, designs, and technologies to enhance the safety and comfort of our helmets. We invest in innovation to ensure our products set industry benchmarks for protection and wearability.",
    },
    {
        title: "Certified for Your Peace of Mind",
        img: thumb3,
        text: "Our manufacturing facilities are ISO certified, and our helmets are certified by recognized standards bodies, providing you with the assurance that our products are manufactured to the highest quality and safety standards.",
    },
    {
        title: "Partner with Us for Quality You Can Trust",
        img: thumb4,
        text: "Choosing Land Helmets means partnering with a company that places quality and safety above all. Our meticulous approach to quality control ensures that you can trust our helmets to protect your most valuable asset—your people.",
    }],
    carouselImg: [
        {img:bannerImg1},
        {img:bannerImg2},
        {img:bannerImg3},
    ],
    faqs: [
        {
            title: "Quality Control at Every Stage",
            text: "From the selection of raw materials to the final product inspection, our quality control process is all-encompassing:",
            list: [
                {
                    title: "Raw Material Inspection",
                    text: "Every batch of materials is thoroughly inspected to ensure it meets our high standards.",
                },
                {
                    title: "In-Process Quality Checks",
                    text: "During manufacturing, our helmets are subject to ongoing inspections and tests to identify and rectify any deviations from our quality standards immediately.",
                }
            ],
        },
  ],

};

export default oneStopContentI;