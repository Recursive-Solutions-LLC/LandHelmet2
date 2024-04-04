import { v4 as uuidv4 } from "uuid";
import img1 from "../assets/img/portfolio/1.png";
import img2 from "../assets/img/helmet-sides/m10/down.jpg";
import img3 from "../assets/img/capabilities/InHouse/8.png";
import img4 from "../assets/img/capabilities/InHouse/9.png";
import img5 from "../assets/img/portfolio/7.png";
import img6 from "../assets/img/portfolio/6.png";

const portfolioTwoData = [


  {
    id: uuidv4(),
      image: img2, cost: "/contact",

    heading: "Refined Appearance Prototyping: ",
    text: "An appearance prototype serves as a meticulous assessment of product design aesthetics. While prioritizing visual appeal, it maintains flexibility regarding color and internal processing standards, ensuring a comprehensive evaluation of the product's outward presentation.",
  }
,
  {
    id: uuidv4(),
      image: img4, cost: "/contact",

    heading: "Final Workable Prototype:",
    text: "The final workable prototype epitomizes the ultimate iteration, encompassing the full spectrum of the helmet's appearance, structure, and functionality. It stands as an unparalleled representation, akin to an unreleased finished product. Crafting the final workable prototype demands the utmost precision and expertise, making it the most intricate stage among the trio of prototypes.",
  },
  {
    id: uuidv4(),
      image: img3, cost: "/contact",

    heading: "Enhanced Structure Prototyping:",
    text: "The primary objective is to assess the feasibility of a product's design. Structure prototyping places a premium on size accuracy, particularly crucial for international markets, ensuring the product's viability and adaptability across diverse environments.",
  },
];

export default portfolioTwoData;
