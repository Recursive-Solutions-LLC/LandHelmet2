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


function Home3() {


    const title = "Get an easy quotation for your industry"

    const icons = [ca, usa]
    
    const contentProps = {
        gridProps: { img: Image , icons:icons },
        processContentProps: {
          heading: "Multi-Impact Protection: Exceed ANSI/ISEA Z89.1 – 2014, CSA Z94.1 2015, EN 12492 standards for versatile head protection.",
          bullets: [
            "Deluxe replaceable Eco-leather chinstrap, nylon, washable chinstrap which is extremely comfortable and helps avoid irritation in the skin.",
            "Universal accessory slot allows use of existing universal accessories",
            "Size: Universal adjustable",
            "10-year lifespan for enduring protection.",
            "Customization Available: Add your Branded Logo",
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
            <Services3 />
            <section className="section-padding-top">
                <Portfolio2 content={portfolioTwoData}/>
            </section>
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
