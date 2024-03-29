import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";

import 'hero-slider/dist/index.css';
import "./app.scss";

import hero5 from '../../assets/img/Hero/slider5.jpeg';
import hero6 from '../../assets/img/Hero/slider6.jpeg';

import hero17 from '../../assets/img/Hero/slider17.jpeg';

import hero20 from '../../assets/img/Hero/slider20.webp';


export default function BasicSlider() {
  return (
    <HeroSlider className="hero-3"
      height={"100vh"}
      slidingAnimation='left_to_right'
      orientation="horizontal"
      set
      initialSlide={1}
      autoplay={true}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 2000,
        height: "100vh"
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay className="single-slide" >
        <Wrapper >
        <div  className="">
                                <div className="hero-contents text-center">
                                    <p>Feel the Future, Embrace the Experience</p>
                                    <h1>Passionately User Focused</h1>
                                    <Link to="/services" className="theme-btn theme-3">
                                        Our Services <BsArrowRight />
                                    </Link>
                                    <Link to="/about" className="theme-btn theme-3">
                                        learn more
                                    </Link>
                                </div>
                            </div>
        </Wrapper>
      </Overlay>

      <Slide
      
        shouldRenderMask

        label="The Brotherhood of Safety"
        background={{
          maskBackgroundBlendMode: 'luminosity',
          backgroundImageSrc: hero5,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        shouldRenderMask
   
        label="Teaching the Next Generation"
        background={{
          maskBackgroundBlendMode: 'luminosity',
          backgroundImageSrc: hero6,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        shouldRenderMask

        label="A Watchful Guardian"
        background={{
          maskBackgroundBlendMode: 'luminosity',
          backgroundImageSrc: hero17,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        shouldRenderMask
       
        label="Precision and Protection"
        background={{
          maskBackgroundBlendMode: 'luminosity',
          backgroundImageSrc: hero20,
          backgroundAnimation: 'zoom'
        }}
        
      />
         
   
      <MenuNav />
    </HeroSlider>
  );
}
