import HeroSlider, { Overlay, Slide, Nav, AutoplayButton } from "hero-slider";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Wrapper from "../UI/Wrapper/Wrapper";


import 'hero-slider/dist/index.css';
import "./app.scss";

import hero5 from '../../assets/img/hero/slider5.jpg';
import hero6 from '../../assets/img/hero/slider20.jpg';

import hero17 from '../../assets/img/hero/slider17.jpg';

import hero20 from '../../assets/img/hero/slider20.jpg';


export default function BasicSlider() {
  return (
    <HeroSlider className="hero-3"
      height={"100vh"}
      slidingAnimation='left_to_right'
      orientation="horizontal"
 
      initialSlide={1}
      autoplay={true}
  
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 2000,
        height: '100vh'
      }}

   set
    >
      <Overlay className="single-slide" >
        <Wrapper >
          <div className="">
            <div className="hero-contents text-center">
              <p>Feel the Future, Embrace the Experience</p>
              <h1 className="pb-3">Passionately User Focused</h1>
              <Link to="/capabilities" className="theme-btn theme-3">
                Our Services <BsArrowRight />
              </Link>
              <Link to="/about" className="theme-btn theme-3 pt-3">
                learn more
              </Link>
            </div>
          </div>
        </Wrapper>
      </Overlay>

      <Slide 



     
        background={{

          backgroundImageSrc: hero5,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide 


   
        background={{

          backgroundImageSrc: hero6,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide 

  
        background={{

          backgroundImageSrc: hero17,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide 



        background={{
          backgroundImageSrcSet:hero20,
          backgroundImageSrc: hero20,
          backgroundAnimation: 'zoom'
        }}

      />


      <Nav />
    </HeroSlider>
  );
}
