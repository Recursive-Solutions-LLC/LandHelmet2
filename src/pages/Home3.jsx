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

import About2 from '../components/About2';
import Cta3 from '../components/Cta2';
import portfolioTwoData from '../content/porfolioTwoData';

function Home3() {


    const title = "Get an easy quotation for your industry"
    return (
        <>
            <Header3 />
            <Hero3 />
            <Services3 />
            <section className="section-padding-top">
                <Portfolio2 content={portfolioTwoData}/>
            </section>
            <Cta1 />
            <Process2 type={2} />
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
