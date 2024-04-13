import HeroSlider, { Overlay, Slide } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";

import 'hero-slider/dist/index.css';

export default function FullBanner({ banner }) {

    console.log('%csrc/components/Banner/FullBanner.jsx:8 banner', 'color: white; background-color: #007acc;', banner);
  return (
    <HeroSlider
      className="hero-4 w-full"
      orientation="horizontal"
      initialSlide={1}
      autoplay={true}
      settings={{
        slidingDuration: 0,  
        slidingDelay: 0,     
        shouldAutoplay: true,
        autoplayDuration: 2000,
        shouldDisplayButtons: false  
      }}
    >
      <Overlay>
        <Wrapper />
      </Overlay>

      
        <Slide
  
          background={{
            backgroundImageSrc: banner,
          }}
        />
   

    </HeroSlider>
  );
}
