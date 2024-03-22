import React from 'react';
import Appointment from '../components/Appointment';
import Blog3 from '../components/Blog3';
import Faq from '../components/Faq';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import Hero3 from '../components/Hero3';
import Portfolio2 from '../components/Portfolio2';
import Portfolio1 from '../components/Portfolio1';
import Process2 from '../components/Process2';
import Services3 from '../components/Services3';
import Services1 from '../components/Services1';
import Sponsors2 from '../components/Sponsors2';
import VideoFeatrued from '../components/VideoFeatured';
import Cta from '../components/Cta3';
import Subscribe from '../components/Subscribe';
 import Timeline from '../components/Timeline';
 import BrandCarousel from '../components/BrandCarousel';
 import TeamMembers2 from '../components/TeamMembers2';
 import { motion, useScroll } from "framer-motion"
function Home3() {
    const { scrollYProgress } = useScroll()
    return (
        <>  <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
            <Header3 />
            <Hero3 />
            <Process2 />
            <Timeline/>
            <Portfolio2 />
            <Services1 />
            <Cta/>
            <Faq />
      
            <TeamMembers2 />
            <Appointment />

    
            <Footer3 />
        </>
    );
}

export default Home3;
