import React from 'react';
import Appointment from '../components/Appointment';
import Faq from '../components/Faq';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import Hero3 from '../components/Hero2';
import Portfolio2 from '../components/Portfolio2';
import Process2 from '../components/Process2';

import Services3 from '../components/Services3';
import Cta from '../components/Cta3';
import Cta1 from '../components/Cta';
import Image from "../assets/img/home3/10.jpg";

import About2 from '../components/About2';
import Cta3 from '../components/Cta2';
import portfolioTwoData from '../content/porfolioTwoData';
import ca from "../assets/img/icon/flags/ca.svg"
import usa from "../assets/img/icon/flags/usa.svg"
import  Ctaa from '../components/UX/InfoSection2' 


 const data = 
    {
     
        title: 'tiranizu',
        subtitle: 'Build your own exclusive Helmet',
        InfoCards: [

          {
            
              cover: Image, link:  "/contact",
        
            title: "Effortless  Direct Communication",
            text: "We prioritize world-class customer care project management for exceptional service. With a focus on direct access, our team of technical experts emerges as your dedicated creative problem solvers, cutting out middlemen for streamlined solutions. Experience unparalleled satisfaction with our customer-centric approach.",
          },
        
          {
            
              cover: Image, link:  "/contact",
        
            title: "In-House R&D and Advance Technology ",
            text: "Harness the expertise of our adept in-house R&D team, armed with state-of-the-art technology like 3D scanning, rapid prototyping, and an elite testing lab. Experience streamlined product development and unrivaled efficiency through advanced material selection and seamless expert collaboration, all without the hassle of intermediaries.",
          },
          {
            
              cover: Image, link:  "/contact",
        
            title: "Integrating Key Attributes for Quality",
            text: " Our commitment lies in proactively integrating key attributes into our products, preempting potential issues and prioritizing quality control. Through prototyping development, we uncover and address issues early, gather crucial feedback, and expedite the production process, ultimately enhancing the user experience.",
          },
        
          {
            
              cover: Image, link:  "/contact",
        
            title: "Deliver a Seamless End-to-End  Quality Solution",
            text: "From mold opening to final product assembly, our integrated manufacturing facilities offer a comprehensive one-stop solution. With a steadfast focus on cost reduction and productivity enhancement, we ensure efficiency at every step of the process.",
          },
          {
            
              cover: Image, link:  "/contact",
        
            title: "Cost Optimization",
            text: "From Development to Installation.Experience seamless process development, documentation, and manufacturing line setup within a lean framework. Clear communication and quality management are key when working with us. Our team ensures ongoing quality control, minimizing costs and maximizing performance.",
          },
          {
            
              cover: Image, link:  "/contact",
        
            title: "tiranizu",
            text: "Our commitment to excellence and customer satisfaction drives our global distribution strategy. By partnering with Land Helmets, you gain more than a supplier, you gain a partner dedicated to end users success with strong principles and a strict bottom line to safeguard business secrets and maintain project confidentiality",
          },
        ]
    }

;
function Home3() {


    const title = "Get an easy quotation for your industry"

    const icons = [ca, usa]
    
    const contentProps = {
        gridProps: { img: Image , icons:icons },
        processContentProps: {
          heading:"Multi-Impact Protection: Exceed ANSI/ISEA Z89.1 – 2014, CSA Z94.1 2015, EN 12492 standards for versatile head protection.",
          bullets: [
            "Deluxe replaceable Eco-leather chinstrap, nylon, washable chinstrap which is extremely comfortable and helps avoid irritation in the skin.",
            "Universal accessory slot allows use of existing universal accessories.",
            "Size: Universal adjustable.",
            "10-year lifespan for enduring protection.",
            "Customization Available: Add your Branded Logo.",
            "Advanced Energy Absorption: Features EPS foam for superior impact absorption."
          ],
          text: "",
        },
        sectionTitle: "Introducing M10 Type II",
      }
  
 
      return (
        <>
            <Header3 />
            <Hero3 />
        
   <Ctaa content={data}/>
            <Services3 />
      
                <Portfolio2 content={portfolioTwoData}/>
            <Cta1 />
            <Process2 content={contentProps}/>
            <About2 />
            <Cta3 />
            <section className="section-padding-top">
                <Cta title={title} />
            </section>
            <Faq />
            <Appointment />
            <Footer3 />
        </>
    );
}

export default Home3;
