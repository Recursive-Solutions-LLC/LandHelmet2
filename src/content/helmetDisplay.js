import m02 from "../assets/img/products/display/m02/M02.png"
import m02_up from "../assets/img/products/display/m02/up.png"
// import m02_side1 from "../assets/img/products/display/m02/side1.png"
import m02_side2 from "../assets/img/products/display/m02/side2.png"
import m02_under from "../assets/img/products/display/m02/under.png"



import m10 from "../assets/img/products/display/m10/M10.png"
import m10_front from "../assets/img/products/display/m10/front.png"
import m10_side1 from "../assets/img/products/display/m10/side1.png"
import m10_side2 from "../assets/img/products/display/m10/side2.png"
import m10_up from "../assets/img/products/display/m10/up.png"



import m12 from "../assets/img/products/display/m12/M12.png"
import m12_front from "../assets/img/products/display/m12/front.png"
import m12_side1 from "../assets/img/products/display/m12/side1.png"
import m12_side2 from "../assets/img/products/display/m12/side1.png"
import m12_up from "../assets/img/products/display/m12/up.png"




const helmetDisplay = {
    m02: {
      title: "Technical description",
      mainImage: m02,
      sides: [ m02_side2, m02_under, m02_up],
      details: [
        {
          title: "Material",
          content: ["● Polyethylene Properties", "● Polyurethane liners", "● Webbing"]
        },
        {
          title: "Weight",
          content: ["220 g"]
        },
        {
          title: "Standards",
          content: ["EN 12492", "EN 397"]
        },
        {
          title: "Size",
          content: ["Universal Adjustable from 51 to 64 cm"]
        }
      ]
    },
    m10: {
      title: "Technical description",
      mainImage: m10,
      sides: [m10_front, m10_side1, m10_side2, m10_up],
      details: [
        {
          title: "Material",
          content: ["● External: ABS Advanced", "● Internal: EPS Foam for superior impact absorption"]
        },
        {
          title: "Weight",
          content: ["510 g"]
        },
        {
          title: "Standards",
          content: ["ANSI/CSA Z89.1 TYPE II Class C", "Class E & G available as well"]
        },
        {
          title: "Protection",
          content: ["Against front and lateral impacts"]
        },
        {
          title: "Size",
          content: ["Universal Adjustable from 51 to 64 cm"]
        }
      ]
    },
    m12: {
        mainImage: m12,
        sides: [m12_front, m12_side1, m12_side2, m12_up],
      title: "Technical description",
      details: [
        {
          title: "Material",
          content: ["● External: ABS Advanced", "● Internal: EPS Foam for superior impact absorption"]
        },
        {
          title: "Weight",
          content: ["490 g"]
        },
        {
          title: "Standards",
          content: ["ANSI/CSA Z89.1 TYPE I Class C", "EN 12492", "EN 397"]
        },
        {
          title: "Protection",
          content: ["Against front impacts"]
        },
        {
          title: "Size",
          content: ["Universal Adjustable from 51 to 64 cm"]
        }
      ]
    }
  }
  
  export default helmetDisplay;
  