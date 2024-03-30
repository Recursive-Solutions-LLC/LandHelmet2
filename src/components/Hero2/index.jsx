import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Wrapper from "../UI/Wrapper/Wrapper";


import 'hero-slider/dist/index.css';
import "./app.scss";

import hero5 from '../../assets/img/home3/slider5.jpg';
import hero6 from '../../assets/img/home3/hero6.jpg';

import hero17 from '../../assets/img/home3/slider17.jpg';

import hero20 from '../../assets/img/home3/slider20.webp';


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
        shouldDisplayButtons: true,
        autoplayDuration: 2000,
        height: "100vh"
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,

      }}
    >
      <Overlay className="single-slide" >
        <Wrapper >
          <div className="">
            <div className="hero-contents text-center">
              <p>Feel the Future, Embrace the Experience.</p>
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

      <Slide shouldRenderMask



        label="The Brotherhood of Safety"
        background={{

          backgroundImageSrc: hero5,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide shouldRenderMask


        label="Teaching the Next Generation"
        background={{

          backgroundImageSrc: hero6,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide shouldRenderMask

        label="A Watchful Guardian"
        background={{

          backgroundImageSrc: hero17,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide shouldRenderMask


        label="Precision and Protection"
        background={{
          backgroundImageSrcSet:hero20,
          backgroundImageSrc: hero20,
          backgroundAnimation: 'zoom'
        }}

      />


      <MenuNav />
    </HeroSlider>
  );
}
