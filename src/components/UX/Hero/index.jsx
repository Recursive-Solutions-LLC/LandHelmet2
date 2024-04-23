import HeroSlider, { Overlay, Slide, Nav, AutoplayButton } from "hero-slider";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Wrapper from "../UI/Wrapper/Wrapper";
import Button from "../Button"


import 'hero-slider/dist/index.css';
import "./app.scss";


export default function Hero({ content }) {
    let { title, subtitle, images, button,button2 } = content;
    const renderImages = images.map((value, index) => (
        <Slide key={index}
            background={{
                backgroundImageSrc: value,
                backgroundAnimation: 'zoom'
            }}
        />
    ))
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
                            <p>{title}</p>
                            <h1 className="pb-3">{subtitle}</h1>
                            <Button content={button}/>
                            <Button className="pt-3" content={button2}/>                          
                        </div>
                    </div>
                </Wrapper>
            </Overlay>
            {renderImages}
            <Nav />
        </HeroSlider>
    );
}
