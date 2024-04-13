import HeroSlider, { Overlay, Slide } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";


import 'hero-slider/dist/index.css';
import "./app.scss";

import hero5 from '../../assets/img/products/hero1.jpg';
import hero6 from '../../assets/img/products/hero2.jpg';

import hero17 from '../../assets/img/products/hero3.jpg';

import hero20 from '../../assets/img/products/hero4.jpg';


export default function BasicSlider() {
  return (
    <HeroSlider className="hero-4 w-full" 

      slidingAnimation='left_to_right'
      orientation="horizontal"
 
      initialSlide={1}
      autoplay={true}
  
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
   
        autoplayDuration: 2000,
     
      }}

   set
    >
      <Overlay  >
        <Wrapper >
          
        </Wrapper>
      </Overlay>

      <Slide 



     
        background={{

          backgroundImageSrc: hero5,
        
        }}
      />

      <Slide 


   
        background={{

          backgroundImageSrc: hero6,
    
        }}
      />

      <Slide 

  
        background={{

          backgroundImageSrc: hero17,
    
        }}
      />

      <Slide 



        background={{

          backgroundImageSrc: hero20,
 
        }}

      />


   
    </HeroSlider>
  );
}
