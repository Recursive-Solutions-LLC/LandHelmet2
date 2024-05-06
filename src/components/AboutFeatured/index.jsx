import React from 'react';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import Bullets from "../Bullets"


function AboutFeatured({ aboutContent }) {

    const { title, subtitle, texts, right, aboutImg, bullets } = aboutContent;

    const imageColumnClass = right ? "order-lg-2" : "";
    const textColumnClass = right ? "order-lg-1" : "";
    const isBullets = bullets !== undefined

    const renderBulletsContainer =isBullets && <Bullets bullets={bullets}/>


const renderTexts = texts &&  texts.map ((text)=>{
    return(   <p className="block-contents-text"> {text}</p>)
})

    return (
        <section className="about-featured-wrapper pt-5 mt-5">
            <div className="container">
                <div className="row ">
                    {/* Adjust the order of this column based on 'right' */}
                    <div className={`col-xl-6 col-lg-6 col-12 ${imageColumnClass}`}>
                        <div
                            className="about-promo bg-cover"
                            style={{ backgroundImage: `url(${aboutImg})`, backgroundSize: "cover" }}
                        />
                    </div>

                    {/* Adjust the order of this column based on 'right' */}
                    <div className={`col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 ${textColumnClass}`}>
                        <div className="block-contents ml-lg-5">
                           {title && <h1>{title}</h1>}
                            {subtitle && <span>{subtitle}</span>}
                            {renderTexts}
                            {renderBulletsContainer}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutFeatured;
