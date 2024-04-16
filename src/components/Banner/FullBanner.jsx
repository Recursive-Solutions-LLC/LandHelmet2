import HeroSlider, { Overlay, Slide } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";

import 'hero-slider/dist/index.css';

export default function FullBanner({ banner }) {
  return (
   <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
   </>
  );
}
