import React from 'react';
import Appointment from '../components/Appointment';
import Faq from '../components/Faq';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import Hero3 from '../components/Hero3';
import Portfolio2 from '../components/Portfolio2';
import Process2 from '../components/Process2';
import Services1 from '../components/Services1';
import Services3 from '../components/Services3';
import Cta from '../components/Cta3';
 import Timeline from '../components/Timeline';
 import TeamMembers2 from '../components/TeamMembers2';
import HorizontalScroll from '../components/HorizontalScrollCarousel';
import ShoeAnimation from '../components/ScrollTrigger' 
import servicesOneData from '../content/servicesOneData';


function Home3() {


    
    return (
        <>  
            <Header3  />
            <Hero3 />
            <HorizontalScroll/>
            <Services3/>
            <Process2 />
           
            <Timeline/>
        
          
            <Portfolio2 />
            <Services1 hasTitle data={servicesOneData} title="Our Classes"/>
            <Cta/>
            <Faq />
      
            <TeamMembers2 />
            <ShoeAnimation/>
            <Appointment />
     
    
            <Footer3 />
        </>
    );
}

export default Home3;
