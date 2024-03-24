import thumb1 from "../assets/img/services/QualityControl/quality-control.jpg";
import thumb2 from "../assets/img/services/QualityControl/innovation.jpg";
import thumb3 from "../assets/img/services/QualityControl/certified.jpg";
import thumb4 from "../assets/img/services/QualityControl/partner.jpg";
import thumb5 from "../assets/img/services/QualityControl/IMG_39241.JPG";

import bannerImg1 from "../assets/img/services/QualityControl/AE9I6285.JPG";
import bannerImg2 from "../assets/img/services/QualityControl/IMG_39081.JPG";
import bannerImg3 from "../assets/img/services/QualityControl/IMG_39151.JPG";

import distributorImg from "../assets/img/services/QualityControl/Desktop/banner-quality.jpg";

const qualityContent = {
    title: "Quality Control",
    Image: distributorImg,
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
    faqs: [{
        title: "Rigorous Testing for Uncompromised Safety",
        text: "Our helmets undergo stringent testing to ensure they meet and exceed industry standards, including ANSI Z89.1-2014(R2019) for Type 1 and Type 2 helmets. Our testing protocols include:",
        list: [
            {
                title: "Impact Absorption",
                text: "To protect against the forces of impact, ensuring the helmet can absorb energy effectively.",
            },
            {
                title: "Penetration Resistance",
                text: "To prevent sharp objects from penetrating the helmet, offering an additional layer of safety.",
            },
            {
                title: "Flammability",
                text: "Assessing the helmet's resistance to flames to ensure performance in extreme conditions.",
            },
            {
                title: "Electrical Insulation",
                text: "For helmets used in electrical work, ensuring they provide adequate protection against electrical hazards.",
            },
        ],
    },
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
            },
            {
                title: "Final Inspection",
                text: "Before shipping, each helmet undergoes a final quality assessment to ensure it is free from defects and meets our safety certifications.",
            },
        ],
    }],

};

export default qualityContent;