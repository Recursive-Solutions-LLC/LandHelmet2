import { v4 as uuidv4 } from "uuid";

import { GiMountainClimbing } from "react-icons/gi";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { FaPersonFalling } from "react-icons/fa6";
import { FaTree } from "react-icons/fa";

const videoFeaturedData = [
  {
    id: uuidv4(),
    icon: GiMountainClimbing,
    heading: "Climbing",
    text: "Conquer new heights with our cutting-edge climbing helmets.",
  },

  {
    id: uuidv4(),
    heading: "Outdoor",
    icon: MdOutlineSportsKabaddi,
    text: "Adventure awaits with our durable outdoor helmets.",
  },

  {
    id: uuidv4(),
    icon: MdConstruction,
    heading: "Construction",

    text: "Stay safe on the job site with our reliable construction helmets.",
  },

  {
    id: uuidv4(),
    icon: FaPersonFalling,
    heading: "Fall Protection",
    text: "Prevent accidents with our trusted fall protection helmets.",
  },

  {
    id: uuidv4(),
    icon: FaTree,
    heading: "Arborist",
    text: "Protect yourself while tending to trees with our specialized arborist helmets.",
  },
];

export default videoFeaturedData;
