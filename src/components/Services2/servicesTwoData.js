import {
  FaCity,
  FaDraftingCompass,
  FaHardHat,
  FaRegBuilding,
  FaTruckMoving,
} from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import thumb1 from "../../assets/img/capabilities/quality-control.jpg";
import thumb2 from "../../assets/img/capabilities/r&d.jpg";
import thumb3 from "../../assets/img/capabilities/global-distributor.jpg";
import thumb4 from "../../assets/img/capabilities/in-house.jpg";

const servicesTwoData = [
  {
    link:"services-details-quality",
    id: uuidv4(),
    thumbnail: thumb1,
    icon: <FaDraftingCompass />,
    heading: "Quality Control",
    text: "At Land Helmets, our commitment to quality is at the forefront of everything...",
  }
  ,
  {
    link:"model-m10",
    id: uuidv4(),
    thumbnail: thumb2,
    icon: <FaHardHat />,
    heading: "R&D",
    text: "At Land Helmets, our Research and Development (R&D) process is ....",
  }
  ,
  {
    link:"services-details-distributor",
    id: uuidv4(),
    thumbnail: thumb3,
    icon: <FaCity />,
    heading: "Global Distributor",
    text: "At Land Helmets, our global reach is specifically designed to support...",
  }
  ,
  {
    link:"services-details-production",
    id: uuidv4(),
    thumbnail: thumb4,
    icon: <FaRegBuilding />,
    heading: "In House Production",
    text: "At Land Helmets, our state-of-the-art in-house production facility...",
  }
];

export default servicesTwoData;
